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
    const cpData = {
      sp_id: checkpoint.sp_id ?? '',
      so_id: checkpoint.so_id ?? '',
      ts_updated: checkpoint.ts_updated ?? new Date(0),
      sort_id: checkpoint.sort_id ?? 0,
    };
    const clause = getPullClause(cpData.sort_id, cpData.ts_updated, limit);
    const totalClause = {
      orderBy: clause.orderBy,
      where: clause.where,
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
  ): Promise<ServiceObject[]> {
    const lastCP = {
      so_id: '',
      sp_id: '',
      sort_id: 0,
      ts_updated: new Date(0),
    };
    let conflicts = [];
    const writtenDocs = new Array<ServiceObject>();

    // iterate over writeRows and get newDocumentState
    for (const row of writeRows) {
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
        
        console.log("conflicts", conflicts);
        console.log("docCurrentMaster", docCurrentMaster);
        console.log("row.assumedMasterState", row.assumedMasterState);
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
    console.log('streamServiceObject', JSON.stringify({streamServiceObject: {
        documents: writtenDocs,
        checkpoint: lastCP,
      },}));
    this.pubSub.publish(this.STREAM_EVENT_NAME, {
      streamServiceObject: {
        documents: writtenDocs,
        checkpoint: lastCP,
      },
    });
    return conflicts;
  }

  @Subscription(() => ServiceObjectBulk, {
    resolve: (payload, _variables, context) => {
      if (payload.streamServiceObject) {
        const docs = payload.streamServiceObject.documents;
        payload.streamServiceObject.documents = docs;
      }
      console.log("payload", JSON.stringify(payload));
      return payload.streamServiceObject;
    },
  })
  streamServiceObject() {
    log(this.STREAM_EVENT_NAME);
    return this.pubSub.asyncIterator(this.STREAM_EVENT_NAME);
  }
}
