import { Injectable } from '@nestjs/common';
import { ServicePlanRepository } from './service_plan.repository';
import { FindManyServicePlanArgs } from 'src/@generated/service-plan/find-many-service-plan.args';
import { FindUniqueServicePlanArgs } from 'src/@generated/service-plan/find-unique-service-plan.args';
import { CreateOneServicePlanArgs } from 'src/@generated/service-plan/create-one-service-plan.args';

@Injectable()
export class ServicePlanService {
  constructor(private repository: ServicePlanRepository) {}

  async getServicePlan(args: FindUniqueServicePlanArgs) {
    return await this.repository.getServicePlan(args);
  }
  async getServicePlans(args: FindManyServicePlanArgs) {
    return await this.repository.getServicePlans(args);
  }

  async upsertServicePlan(args: any) {
    return await this.repository.upsertServicePlan(args);
  }

  async createServicePlan(args: CreateOneServicePlanArgs) {
    return await this.repository.createServicePlan(args);
  }
}
