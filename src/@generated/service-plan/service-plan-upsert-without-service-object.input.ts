import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanUpdateWithoutService_objectInput } from './service-plan-update-without-service-object.input';
import { Type } from 'class-transformer';
import { ServicePlanCreateWithoutService_objectInput } from './service-plan-create-without-service-object.input';
import { ServicePlanWhereInput } from './service-plan-where.input';

@InputType()
export class ServicePlanUpsertWithoutService_objectInput {

    @Field(() => ServicePlanUpdateWithoutService_objectInput, {nullable:false})
    @Type(() => ServicePlanUpdateWithoutService_objectInput)
    update!: ServicePlanUpdateWithoutService_objectInput;

    @Field(() => ServicePlanCreateWithoutService_objectInput, {nullable:false})
    @Type(() => ServicePlanCreateWithoutService_objectInput)
    create!: ServicePlanCreateWithoutService_objectInput;

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;
}
