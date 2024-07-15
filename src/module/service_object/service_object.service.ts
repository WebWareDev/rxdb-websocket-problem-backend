import { Injectable } from '@nestjs/common';
import { ServiceObjectRepository } from './service_object.repository';
import { FindUniqueServiceObjectArgs } from 'src/@generated/service-object/find-unique-service-object.args';
import { FindManyServiceObjectArgs } from 'src/@generated/service-object/find-many-service-object.args';
import { CreateOneServiceObjectArgs } from 'src/@generated/service-object/create-one-service-object.args';

@Injectable()
export class ServiceObjectService {
  constructor(private repository: ServiceObjectRepository) {}

  async getServiceObject(args: FindUniqueServiceObjectArgs) {
    return await this.repository.getServiceObject(args);
  }
  async getServiceObjects(args: FindManyServiceObjectArgs) {
    return await this.repository.getServiceObjects(args);
  }

  async upsertServiceObject(args: any) {
    return await this.repository.upsertServiceObject(args);
  }

  async createServiceObject(args: CreateOneServiceObjectArgs) {
    return await this.repository.createServiceObject(args);
  }

  async filterServiceObjectsByResortIds(resortIds: string[]) {
    return await this.repository.getServiceObjects({
      where: {
        service_plan: {
          is: {
            resort_id: {
              in: resortIds,
            },
          },
        },
      },
    });
  }
}
