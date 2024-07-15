import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceObjectSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    status_id?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    position_number?: true;

    @Field(() => Boolean, {nullable:true})
    sort_id?: true;

    @Field(() => Boolean, {nullable:true})
    build_year?: true;
}
