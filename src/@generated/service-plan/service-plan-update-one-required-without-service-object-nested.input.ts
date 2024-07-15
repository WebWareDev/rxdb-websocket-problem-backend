import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanCreateWithoutService_objectInput } from './service-plan-create-without-service-object.input';
import { Type } from 'class-transformer';
import { ServicePlanCreateOrConnectWithoutService_objectInput } from './service-plan-create-or-connect-without-service-object.input';
import { ServicePlanUpsertWithoutService_objectInput } from './service-plan-upsert-without-service-object.input';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { ServicePlanUpdateToOneWithWhereWithoutService_objectInput } from './service-plan-update-to-one-with-where-without-service-object.input';

@InputType()
export class ServicePlanUpdateOneRequiredWithoutService_objectNestedInput {

    @Field(() => ServicePlanCreateWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanCreateWithoutService_objectInput)
    create?: ServicePlanCreateWithoutService_objectInput;

    @Field(() => ServicePlanCreateOrConnectWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanCreateOrConnectWithoutService_objectInput)
    connectOrCreate?: ServicePlanCreateOrConnectWithoutService_objectInput;

    @Field(() => ServicePlanUpsertWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanUpsertWithoutService_objectInput)
    upsert?: ServicePlanUpsertWithoutService_objectInput;

    @Field(() => ServicePlanWhereUniqueInput, {nullable:true})
    @Type(() => ServicePlanWhereUniqueInput)
    connect?: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;

    @Field(() => ServicePlanUpdateToOneWithWhereWithoutService_objectInput, {nullable:true})
    @Type(() => ServicePlanUpdateToOneWithWhereWithoutService_objectInput)
    update?: ServicePlanUpdateToOneWithWhereWithoutService_objectInput;
}
