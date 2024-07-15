import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServicePlanMaxAggregate {

    @Field(() => String, {nullable:true})
    sp_id?: string;

    @Field(() => String, {nullable:true})
    resort_id?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    status_id?: number;

    @Field(() => Int, {nullable:true})
    owner_id?: number;

    @Field(() => Date, {nullable:true})
    ts_inserted?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_updated?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_completed?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_assigned?: Date | string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    sort_id?: number;

    @Field(() => Date, {nullable:true})
    ts_deleted?: Date | string;
}
