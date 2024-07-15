import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('CPInput')
export class CP {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  ts_updated!: Date;

  @Field(() => Int, { nullable: true })
  sort_id?: number;
}
