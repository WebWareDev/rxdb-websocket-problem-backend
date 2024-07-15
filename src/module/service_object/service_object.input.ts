import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { ServiceObjectCreateInput } from 'src/@generated/service-object/service-object-create.input';
import { AttachmentInput } from '../checkpoint/attachment.input';

@InputType()
export class ServiceObjectInput extends PartialType(ServiceObjectCreateInput) {
  @Field(() => String, { nullable: false })
  sp_id!: string;

  @Field(() => AttachmentInput, { nullable: true })
  _attachments?: AttachmentInput;
}
