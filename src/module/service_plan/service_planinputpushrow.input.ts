import { Field, InputType } from '@nestjs/graphql';
import { ServicePlanInput } from './service_plan.input';

@InputType()
export default class ServicePlanInputPushRow {
  @Field(() => ServicePlanInput, { nullable: true })
  assumedMasterState?: ServicePlanInput;

  @Field(() => ServicePlanInput)
  newDocumentState: ServicePlanInput;
}
