import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServicePlanSumAggregate {

    @Field(() => Int, {nullable:true})
    status_id?: number;

    @Field(() => Int, {nullable:true})
    owner_id?: number;

    @Field(() => Int, {nullable:true})
    sort_id?: number;
}
