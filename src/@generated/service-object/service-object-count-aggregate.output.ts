import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceObjectCountAggregate {

    @Field(() => Int, {nullable:false})
    sp_id!: number;

    @Field(() => Int, {nullable:false})
    so_id!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    ts_inserted!: number;

    @Field(() => Int, {nullable:false})
    ts_updated!: number;

    @Field(() => Int, {nullable:false})
    deleted!: number;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
