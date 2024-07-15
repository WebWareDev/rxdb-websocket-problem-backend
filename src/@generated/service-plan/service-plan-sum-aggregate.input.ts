import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServicePlanSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sort_id?: true;
}
