import {
  Args,
  Context,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { log } from 'console';
import { ServicePlan } from 'src/@generated/service-plan/service-plan.model';
import { FindManyServicePlanArgs } from 'src/@generated/service-plan/find-many-service-plan.args';
import { ServicePlanService } from './service_plan.service';
import { ServicePlanBulk } from './service_plan_bulk.model';
import ServicePlanInputPushRow from './service_planinputpushrow.input';
import { getConflicts, getPullClause } from 'src/utils/rxdb';
import { ServicePlanCP } from './service_plan_cp.model';

@Resolver('ServicePlan')
export class ServicePlanResolver {
  private pubSub: PubSub;
  private readonly STREAM_EVENT_NAME = 'streamServicePlan';

  constructor(
    private readonly service: ServicePlanService,
  ) {
    this.pubSub = new PubSub();
  }
  @Query(() => [ServicePlan])
  async getServicePlans(@Args() args: FindManyServicePlanArgs) {
    return await this.service.getServicePlans(args);
  }

  @Query(() => ServicePlanBulk)
  async pullServicePlan(
    @Args('checkpoint') checkpoint: ServicePlanCP,
    @Args('limit', { type: () => Int }) limit: number,
  ) {
    const cpData = {
      sp_id: checkpoint.sp_id ?? '',
      ts_updated: checkpoint.ts_updated ?? new Date(0),
      sort_id: checkpoint.sort_id ?? 0,
    };
    const resortIds = ['8bbf66d8-d894-47df-a12e-c00f4c1f0e60'];
    const clause = getPullClause(cpData.sort_id, cpData.ts_updated, limit);
    const totalClause = {
      orderBy: clause.orderBy,
      where: {
        AND: [
          {
            resort_id: {
              in: resortIds,
            },
          },
          clause.where,
        ],
      },
      take: limit,
    };
    const sortedDocs = await this.service.getServicePlans(totalClause);
    const lastDoc = sortedDocs[sortedDocs.length - 1];

    if (lastDoc) {
      cpData.sp_id = lastDoc.sp_id;
      cpData.ts_updated = lastDoc.ts_updated;
      cpData.sort_id = lastDoc.sort_id;
    }
    const returnData = {
      documents: sortedDocs,
      checkpoint: cpData,
    };
    return returnData;
  }

  @Mutation(() => [ServicePlan])
  async pushServicePlan(
    @Args('writeRows', { type: () => [ServicePlanInputPushRow] })
    writeRows: ServicePlanInputPushRow[],
    @Context('req') req: any,
  ): Promise<ServicePlan[]> {

    const resortIds = ['8bbf66d8-d894-47df-a12e-c00f4c1f0e60'];
    const lastCP = {
      sp_id: '',
      sort_id: 0,
      ts_updated: new Date(0),
    };
    let conflicts = [];
    const writtenDocs = new Array<ServicePlan>();

    // iterate over writeRows and get newDocumentState
    for (const row of writeRows) {
      if (!resortIds.includes(row.newDocumentState.resort_id)) {
        continue;
      }
      const docId = row.newDocumentState.sp_id;
      const docCurrentMaster = await this.service.getServicePlan({
        where: {
          sp_id: docId.toString(),
        },
      });

      conflicts = getConflicts(docCurrentMaster, row.assumedMasterState);
      if (conflicts.length) {
        const email = req.user?.accessToken.emails[0];
        const logData = {
          docCurrentMaster: docCurrentMaster,
          assumedMasterState: row.assumedMasterState,
          user: email,
          ressource: 'service_plan',
        };
        console.log(logData);
        break;
      }

      const doc = row.newDocumentState;

      // if owner changes, update ts_assigned with new Date()
      if (docCurrentMaster.owner_id !== doc.owner_id) {
        doc.ts_assigned = new Date();
      }
      if (docCurrentMaster.status_id === 0 && doc.status_id === 1) {
        doc.ts_completed = new Date();
      }
      if (docCurrentMaster.status_id === 1 && doc.status_id === 0) {
        // now reopened
        doc.ts_completed = null;
      }

      const newdoc = await this.service.upsertServicePlan(doc);

      if (newdoc) {
        lastCP.sp_id = newdoc.sp_id;
        lastCP.sort_id = newdoc.sort_id;
        lastCP.ts_updated = newdoc.ts_updated;
      }
      writtenDocs.push(newdoc);
    }

    this.pubSub.publish(this.STREAM_EVENT_NAME, {
      streamServicePlan: {
        documents: writtenDocs,
        checkpoint: lastCP,
      },
    });

    // logPushResults(writtenDocs, conflicts, writeRows);
    return conflicts;
  }

  @Subscription(() => ServicePlanBulk, {
    resolve: (payload, _variables, context) => {
      if (payload.streamServicePlan) {
        const docs = payload.streamServicePlan.documents;
        payload.streamServicePlan.documents = docs;
      }
      return payload.streamServicePlan;
    },
  })
  streamServicePlan() {
    log(this.STREAM_EVENT_NAME);
    return this.pubSub.asyncIterator(this.STREAM_EVENT_NAME);
  }
}
