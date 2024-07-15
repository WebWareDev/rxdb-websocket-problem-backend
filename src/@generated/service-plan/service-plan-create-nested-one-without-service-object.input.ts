import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanCreateWithoutService_objectInput } from './service-plan-create-without-service-object.input';
import { Type } from 'class-transformer';
import { ServicePlanCreateOrConnectWithoutService_objectInput } from './service-plan-create-or-connect-without-service-object.input';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';

@InputType()
export class ServicePlanCreateNestedOneWithoutService_objectInput {

    @Field(() => ServicePlanCreateWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanCreateWithoutService_objectInput)
    create?: ServicePlanCreateWithoutService_objectInput;

    @Field(() => ServicePlanCreateOrConnectWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanCreateOrConnectWithoutService_objectInput)
    connectOrCreate?: ServicePlanCreateOrConnectWithoutService_objectInput;

    @Field(() => ServicePlanWhereUniqueInput, {nullable:true})
    @Type(() => ServicePlanWhereUniqueInput)
    connect?: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;
}
