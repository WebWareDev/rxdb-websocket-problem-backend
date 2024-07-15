import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceObjectMinAggregate {

    @Field(() => String, {nullable:true})
    sp_id?: string;

    @Field(() => String, {nullable:true})
    so_id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    type_id?: string;

    @Field(() => String, {nullable:true})
    type_name?: string;

    @Field(() => String, {nullable:true})
    master_so_id?: string;

    @Field(() => Int, {nullable:true})
    status_id?: number;

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

    @Field(() => Date, {nullable:true})
    ts_inserted?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_updated?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_completed?: Date | string;

    @Field(() => Boolean, {nullable:true})
    deleted?: boolean;

    @Field(() => Int, {nullable:true})
    sort_id?: number;

    @Field(() => Date, {nullable:true})
    ts_deleted?: Date | string;

    @Field(() => String, {nullable:true})
    vendor?: string;

    @Field(() => Int, {nullable:true})
    build_year?: number;
}
