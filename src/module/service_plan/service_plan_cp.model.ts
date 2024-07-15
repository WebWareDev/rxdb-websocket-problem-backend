import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('ServicePlanCPInput')
export class ServicePlanCP {
  @Field(() => String, { nullable: false })
  sp_id!: string;

  @Field(() => Date, { nullable: false })
  ts_updated!: Date;

  @Field(() => Int, { nullable: true })
  sort_id?: number;
}
