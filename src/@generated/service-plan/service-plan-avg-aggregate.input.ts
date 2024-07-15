import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServicePlanAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sort_id?: true;
}
