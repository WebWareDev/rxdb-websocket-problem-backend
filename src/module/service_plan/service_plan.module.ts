import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { ServicePlanRepository } from './service_plan.repository';
import { ServicePlanResolver } from './service_plan.resolver';
import { ServicePlanService } from './service_plan.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ServicePlanRepository,
    ServicePlanResolver,
    ServicePlanService,
  ],
})
export class ServicePlanModule {}
