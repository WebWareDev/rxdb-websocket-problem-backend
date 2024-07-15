import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ServiceObjectCountAggregate } from './service-object-count-aggregate.output';
import { ServiceObjectAvgAggregate } from './service-object-avg-aggregate.output';
import { ServiceObjectSumAggregate } from './service-object-sum-aggregate.output';
import { ServiceObjectMinAggregate } from './service-object-min-aggregate.output';
import { ServiceObjectMaxAggregate } from './service-object-max-aggregate.output';

@ObjectType()
export class ServiceObjectGroupBy {

    @Field(() => String, {nullable:false})
    sp_id!: string;

    @Field(() => String, {nullable:false})
    so_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date | string;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => ServiceObjectCountAggregate, {nullable:true})
    _count?: ServiceObjectCountAggregate;

    @Field(() => ServiceObjectAvgAggregate, {nullable:true})
    _avg?: ServiceObjectAvgAggregate;

    @Field(() => ServiceObjectSumAggregate, {nullable:true})
    _sum?: ServiceObjectSumAggregate;

    @Field(() => ServiceObjectMinAggregate, {nullable:true})
    _min?: ServiceObjectMinAggregate;

    @Field(() => ServiceObjectMaxAggregate, {nullable:true})
    _max?: ServiceObjectMaxAggregate;
}
