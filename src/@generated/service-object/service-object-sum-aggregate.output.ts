import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceObjectSumAggregate {

    @Field(() => Int, {nullable:true})
    status_id?: number;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => Int, {nullable:true})
    position_number?: number;

    @Field(() => Int, {nullable:true})
    sort_id?: number;

    @Field(() => Int, {nullable:true})
    build_year?: number;
}
