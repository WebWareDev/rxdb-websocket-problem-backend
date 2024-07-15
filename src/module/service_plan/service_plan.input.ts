import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { ServicePlanCreateInput } from 'src/@generated/service-plan/service-plan-create.input';
import { AttachmentInput } from '../checkpoint/attachment.input';

@InputType()
export class ServicePlanInput extends PartialType(ServicePlanCreateInput) {

  @Field(() => AttachmentInput, { nullable: true })
  _attachments?: AttachmentInput;
}
