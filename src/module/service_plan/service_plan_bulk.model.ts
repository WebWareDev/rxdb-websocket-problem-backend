import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServicePlan } from 'src/@generated/service-plan/service-plan.model';
import { ServicePlanCP } from './service_plan_cp.model';

@ObjectType()
export class ServicePlanBulk {
  @Field(() => [ServicePlan])
  documents: [ServicePlan];

  @Field(() => ServicePlanCP)
  checkpoint: ServicePlanCP;
}
