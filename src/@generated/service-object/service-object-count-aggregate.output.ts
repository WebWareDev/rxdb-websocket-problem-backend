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
    name!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    type_id!: number;

    @Field(() => Int, {nullable:false})
    type_name!: number;

    @Field(() => Int, {nullable:false})
    master_so_id!: number;

    @Field(() => Int, {nullable:false})
    status_id!: number;

    @Field(() => Int, {nullable:false})
    serial_number!: number;

    @Field(() => Int, {nullable:false})
    latitude!: number;

    @Field(() => Int, {nullable:false})
    longitude!: number;

    @Field(() => Int, {nullable:false})
    track_name!: number;

    @Field(() => Int, {nullable:false})
    position_number!: number;

    @Field(() => Int, {nullable:false})
    machine_room_name!: number;

    @Field(() => Int, {nullable:false})
    img_dev!: number;

    @Field(() => Int, {nullable:false})
    img_mnt!: number;

    @Field(() => Int, {nullable:false})
    ts_inserted!: number;

    @Field(() => Int, {nullable:false})
    ts_updated!: number;

    @Field(() => Int, {nullable:false})
    ts_completed!: number;

    @Field(() => Int, {nullable:false})
    deleted!: number;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => Int, {nullable:false})
    ts_deleted!: number;

    @Field(() => Int, {nullable:false})
    vendor!: number;

    @Field(() => Int, {nullable:false})
    build_year!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
