import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ServicePlanCreateNestedOneWithoutService_objectInput } from '../service-plan/service-plan-create-nested-one-without-service-object.input';

@InputType()
export class ServiceObjectCreateInput {

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

    @Field(() => Int, {nullable:true})
    sort_id?: number;

    @Field(() => ServicePlanCreateNestedOneWithoutService_objectInput, {nullable:false})
    service_plan!: ServicePlanCreateNestedOneWithoutService_objectInput;
}
