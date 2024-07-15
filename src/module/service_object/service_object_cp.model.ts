import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('ServiceObjectCPInput')
export class ServiceObjectCP {
  @Field(() => String, { nullable: false })
  sp_id!: string;

  @Field(() => String, { nullable: false })
  so_id!: string;

  @Field(() => Date, { nullable: false })
  ts_updated!: Date;

  @Field(() => Int, { nullable: true })
  sort_id?: number;
}
