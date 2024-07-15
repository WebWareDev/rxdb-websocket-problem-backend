import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, ServicePlan } from '@prisma/client';
import { FindUniqueServicePlanArgs } from 'src/@generated/service-plan/find-unique-service-plan.args';
import { FindManyServicePlanArgs } from 'src/@generated/service-plan/find-many-service-plan.args';
import { CreateOneServicePlanArgs } from 'src/@generated/service-plan/create-one-service-plan.args';

@Injectable()
export class ServicePlanRepository {
  constructor(private prisma: PrismaService) {}

  async getServicePlan(
    args: FindUniqueServicePlanArgs,
  ): Promise<ServicePlan | null> {
    return await this.prisma.servicePlan.findUnique({
      ...args,
    });
  }

  async getServicePlans(args: FindManyServicePlanArgs): Promise<ServicePlan[]> {
    return this.prisma.servicePlan.findMany({
      ...args,
    });
  }
  async createServicePlan(
    args: CreateOneServicePlanArgs,
  ): Promise<ServicePlan> {
    return this.prisma.servicePlan.create({
      ...args,
      data: args.data as Prisma.ServicePlanCreateInput,
    });
  }

  async upsertServicePlan(args: any): Promise<ServicePlan> {
    delete args.sort_id;

    const updateData = {
      ...args,
      ts_updated: new Date(),
    };

    return this.prisma.servicePlan.upsert({
      where: {
        sp_id: args.sp_id,
      },
      update: updateData,
      create: {
        ...args,
        ts_updated: new Date(),
        ts_inserted: new Date(),
      },
    });
  }
}
