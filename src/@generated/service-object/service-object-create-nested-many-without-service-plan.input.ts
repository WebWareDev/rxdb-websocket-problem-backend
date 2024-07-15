import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectCreateWithoutService_planInput } from './service-object-create-without-service-plan.input';
import { Type } from 'class-transformer';
import { ServiceObjectCreateOrConnectWithoutService_planInput } from './service-object-create-or-connect-without-service-plan.input';
import { ServiceObjectCreateManyService_planInputEnvelope } from './service-object-create-many-service-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';

@InputType()
export class ServiceObjectCreateNestedManyWithoutService_planInput {

    @Field(() => [ServiceObjectCreateWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectCreateWithoutService_planInput)
    create?: Array<ServiceObjectCreateWithoutService_planInput>;

    @Field(() => [ServiceObjectCreateOrConnectWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectCreateOrConnectWithoutService_planInput)
    connectOrCreate?: Array<ServiceObjectCreateOrConnectWithoutService_planInput>;

    @Field(() => ServiceObjectCreateManyService_planInputEnvelope, {nullable:true})
    @Type(() => ServiceObjectCreateManyService_planInputEnvelope)
    createMany?: ServiceObjectCreateManyService_planInputEnvelope;

    @Field(() => [ServiceObjectWhereUniqueInput], {nullable:true})
    @Type(() => ServiceObjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>>;
}
