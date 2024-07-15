import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServicePlanMinAggregate {

    @Field(() => String, {nullable:true})
    sp_id?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    ts_inserted?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_updated?: Date | string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    sort_id?: number;
}
