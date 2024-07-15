import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServicePlanCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sp_id?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    ts_inserted?: true;

    @Field(() => Boolean, {nullable:true})
    ts_updated?: true;

    @Field(() => Boolean, {nullable:true})
    deleted?: true;

    @Field(() => Boolean, {nullable:true})
    sort_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
