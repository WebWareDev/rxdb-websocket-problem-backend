import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ServiceObject } from '../service-object/service-object.model';
import { ServicePlanCount } from './service-plan-count.output';

@ObjectType()
export class ServicePlan {

    @Field(() => ID, {nullable:false})
    sp_id!: string;

    @Field(() => String, {nullable:false})
    resort_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    status_id!: number;

    @Field(() => Int, {nullable:true})
    owner_id!: number | null;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date;

    @Field(() => Date, {nullable:true})
    ts_completed!: Date | null;

    @Field(() => Date, {nullable:true})
    ts_assigned!: Date | null;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => Date, {nullable:true})
    ts_deleted!: Date | null;

    @Field(() => [ServiceObject], {nullable:true})
    service_object?: Array<ServiceObject>;

    @Field(() => ServicePlanCount, {nullable:false})
    _count?: ServicePlanCount;
}
