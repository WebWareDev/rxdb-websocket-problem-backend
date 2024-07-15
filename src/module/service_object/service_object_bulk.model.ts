import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServiceObjectCP } from './service_object_cp.model';
import { ServiceObject } from 'src/@generated/service-object/service-object.model';

@ObjectType()
export class ServiceObjectBulk {
  @Field(() => [ServiceObject])
  documents: [ServiceObject];

  @Field(() => ServiceObjectCP)
  checkpoint: ServiceObjectCP;
}
