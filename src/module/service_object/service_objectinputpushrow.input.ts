import { Field, InputType } from '@nestjs/graphql';
import { ServiceObjectInput } from './service_object.input';

@InputType()
export default class ServiceObjectInputPushRow {
  @Field(() => ServiceObjectInput, { nullable: true })
  assumedMasterState?: ServiceObjectInput;

  @Field(() => ServiceObjectInput)
  newDocumentState: ServiceObjectInput;
}
