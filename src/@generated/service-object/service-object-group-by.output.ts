import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
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
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    type_id!: string;

    @Field(() => String, {nullable:true})
    type_name?: string;

    @Field(() => String, {nullable:false})
    master_so_id!: string;

    @Field(() => Int, {nullable:false})
    status_id!: number;

    @Field(() => String, {nullable:true})
    serial_number?: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => String, {nullable:true})
    track_name?: string;

    @Field(() => Int, {nullable:true})
    position_number?: number;

    @Field(() => String, {nullable:true})
    machine_room_name?: string;

    @Field(() => String, {nullable:true})
    img_dev?: string;

    @Field(() => String, {nullable:true})
    img_mnt?: string;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date | string;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date | string;

    @Field(() => Date, {nullable:true})
    ts_completed?: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => Date, {nullable:true})
    ts_deleted?: Date | string;

    @Field(() => String, {nullable:true})
    vendor?: string;

    @Field(() => Int, {nullable:true})
    build_year?: number;

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
