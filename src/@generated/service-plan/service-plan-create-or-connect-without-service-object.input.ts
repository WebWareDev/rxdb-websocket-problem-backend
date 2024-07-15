import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { Type } from 'class-transformer';
import { ServicePlanCreateWithoutService_objectInput } from './service-plan-create-without-service-object.input';

@InputType()
export class ServicePlanCreateOrConnectWithoutService_objectInput {

    @Field(() => ServicePlanWhereUniqueInput, {nullable:false})
    @Type(() => ServicePlanWhereUniqueInput)
    where!: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;

    @Field(() => ServicePlanCreateWithoutService_objectInput, {nullable:false})
    @Type(() => ServicePlanCreateWithoutService_objectInput)
    create!: ServicePlanCreateWithoutService_objectInput;
}
