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
import { ServiceObjectService } from './service_object.service';
import { ServiceObjectBulk } from './service_object_bulk.model';
import { getConflicts, getPullClause } from 'src/utils/rxdb';
import { ServiceObjectCP } from './service_object_cp.model';
import { FindManyServiceObjectArgs } from 'src/@generated/service-object/find-many-service-object.args';
import { ServiceObject } from 'src/@generated/service-object/service-object.model';
import ServiceObjectInputPushRow from './service_objectinputpushrow.input';

@Resolver('ServiceObject')
export class ServiceObjectResolver {
  private pubSub: PubSub;
  private readonly STREAM_EVENT_NAME = 'streamServiceObject';

  constructor(
    private readonly service: ServiceObjectService,
  ) {
    this.pubSub = new PubSub();
  }
  @Query(() => [ServiceObject])
  async getServiceObjects(@Args() args: FindManyServiceObjectArgs) {
    return await this.service.getServiceObjects(args);
  }

  @Query(() => ServiceObjectBulk)
  async pullServiceObject(
    @Args('checkpoint') checkpoint: ServiceObjectCP,
    @Args('limit', { type: () => Int }) limit: number,
  ) {

    const resortIds = ['8bbf66d8-d894-47df-a12e-c00f4c1f0e60'];
    const cpData = {
      sp_id: checkpoint.sp_id ?? '',
      so_id: checkpoint.so_id ?? '',
      ts_updated: checkpoint.ts_updated ?? new Date(0),
      sort_id: checkpoint.sort_id ?? 0,
    };
    const clause = getPullClause(cpData.sort_id, cpData.ts_updated, limit);
    const totalClause = {
      orderBy: clause.orderBy,
      where: {
        AND: [
          {
            service_plan: {
              is: {
                resort_id: {
                  in: resortIds,
                },
              },
            },
          },
          clause.where,
        ],
      },
      take: limit,
    };
    const sortedDocs = await this.service.getServiceObjects(totalClause);
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

  @Mutation(() => [ServiceObject])
  async pushServiceObject(
    @Args('writeRows', { type: () => [ServiceObjectInputPushRow] })
    writeRows: ServiceObjectInputPushRow[],
    @Context('req') req: any,
  ): Promise<ServiceObject[]> {
    const resortIds = ['8bbf66d8-d894-47df-a12e-c00f4c1f0e60'];
    const lastCP = {
      so_id: '',
      sp_id: '',
      sort_id: 0,
      ts_updated: new Date(0),
    };
    let conflicts = [];
    const writtenDocs = new Array<ServiceObject>();
    const allObjects =
      await this.service.filterServiceObjectsByResortIds(resortIds);
    const allIds = allObjects.map((o) => o.sp_id);

    // iterate over writeRows and get newDocumentState
    for (const row of writeRows) {
      if (!allIds.includes(row.newDocumentState.sp_id)) {
        continue;
      }

      const docSpId = row.newDocumentState.sp_id;
      const docSoId = row.newDocumentState.so_id;
      const docCurrentMaster = await this.service.getServiceObject({
        where: {
          sp_id_so_id: {
            sp_id: docSpId,
            so_id: docSoId,
          },
        },
      });

      conflicts = getConflicts(docCurrentMaster, row.assumedMasterState);
      if (conflicts.length) {
        const email = req.user?.accessToken.emails[0];
        const logData = {
          docCurrentMaster: docCurrentMaster,
          assumedMasterState: row.assumedMasterState,
          user: email,
          ressource: 'service_object',
        };
        console.log(logData);
        break;
      }

      const doc = row.newDocumentState;
      const newdoc = await this.service.upsertServiceObject(doc);

      if (newdoc) {
        lastCP.so_id = newdoc.so_id;
        lastCP.sp_id = newdoc.sp_id;
        lastCP.sort_id = newdoc.sort_id;
        lastCP.ts_updated = newdoc.ts_updated;
      }
      writtenDocs.push(newdoc);
    }
    this.pubSub.publish(this.STREAM_EVENT_NAME, {
      streamServiceObject: {
        documents: writtenDocs,
        checkpoint: lastCP,
      },
    });
    return conflicts;
  }

  @Subscription(() => ServiceObjectBulk, {
    async resolve(this: ServiceObjectResolver, payload, _variables, context) {
      if (payload.streamServiceObject) {
        const docs = payload.streamServiceObject.documents;
        payload.streamServiceObject.documents = docs;
      }
      return payload.streamServiceObject;
    },
  })
  streamServiceObject() {
    log(this.STREAM_EVENT_NAME);
    return this.pubSub.asyncIterator(this.STREAM_EVENT_NAME);
  }
}
