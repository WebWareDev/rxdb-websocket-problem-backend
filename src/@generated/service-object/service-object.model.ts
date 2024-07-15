import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ServicePlan } from '../service-plan/service-plan.model';

@ObjectType()
export class ServiceObject {

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
    type_name!: string | null;

    @Field(() => String, {nullable:false})
    master_so_id!: string;

    @Field(() => Int, {nullable:false})
    status_id!: number;

    @Field(() => String, {nullable:true})
    serial_number!: string | null;

    @Field(() => Float, {nullable:true})
    latitude!: number | null;

    @Field(() => Float, {nullable:true})
    longitude!: number | null;

    @Field(() => String, {nullable:true})
    track_name!: string | null;

    @Field(() => Int, {nullable:true})
    position_number!: number | null;

    @Field(() => String, {nullable:true})
    machine_room_name!: string | null;

    @Field(() => String, {nullable:true})
    img_dev!: string | null;

    @Field(() => String, {nullable:true})
    img_mnt!: string | null;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date;

    @Field(() => Date, {nullable:true})
    ts_completed!: Date | null;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => Date, {nullable:true})
    ts_deleted!: Date | null;

    @Field(() => String, {nullable:true})
    vendor!: string | null;

    @Field(() => Int, {nullable:true})
    build_year!: number | null;

    @Field(() => ServicePlan, {nullable:false})
    service_plan?: ServicePlan;
}
