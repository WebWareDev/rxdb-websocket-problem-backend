import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AttachmentInput {
  // NOTE: unknown, because otherwise empty objects are not allowed
  @Field(() => String, { nullable: true, defaultValue: '' })
  _unknown: string;
}
