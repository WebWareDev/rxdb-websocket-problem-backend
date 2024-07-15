import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ServicePlan } from '../service-plan/service-plan.model';

@ObjectType()
export class ServiceObject {

    @Field(() => String, {nullable:false})
    sp_id!: string;

    @Field(() => String, {nullable:false})
    so_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:false})
    sort_id!: number;

    @Field(() => ServicePlan, {nullable:false})
    service_plan?: ServicePlan;
}
