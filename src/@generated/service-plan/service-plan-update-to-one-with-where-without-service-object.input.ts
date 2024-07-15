import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { Type } from 'class-transformer';
import { ServicePlanUpdateWithoutService_objectInput } from './service-plan-update-without-service-object.input';

@InputType()
export class ServicePlanUpdateToOneWithWhereWithoutService_objectInput {

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;

    @Field(() => ServicePlanUpdateWithoutService_objectInput, {nullable:false})
    @Type(() => ServicePlanUpdateWithoutService_objectInput)
    data!: ServicePlanUpdateWithoutService_objectInput;
}
