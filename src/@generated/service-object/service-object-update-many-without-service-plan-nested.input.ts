import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectCreateWithoutService_planInput } from './service-object-create-without-service-plan.input';
import { Type } from 'class-transformer';
import { ServiceObjectCreateOrConnectWithoutService_planInput } from './service-object-create-or-connect-without-service-plan.input';
import { ServiceObjectUpsertWithWhereUniqueWithoutService_planInput } from './service-object-upsert-with-where-unique-without-service-plan.input';
import { ServiceObjectCreateManyService_planInputEnvelope } from './service-object-create-many-service-plan-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { ServiceObjectUpdateWithWhereUniqueWithoutService_planInput } from './service-object-update-with-where-unique-without-service-plan.input';
import { ServiceObjectUpdateManyWithWhereWithoutService_planInput } from './service-object-update-many-with-where-without-service-plan.input';
import { ServiceObjectScalarWhereInput } from './service-object-scalar-where.input';

@InputType()
export class ServiceObjectUpdateManyWithoutService_planNestedInput {

    @Field(() => [ServiceObjectCreateWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectCreateWithoutService_planInput)
    create?: Array<ServiceObjectCreateWithoutService_planInput>;

    @Field(() => [ServiceObjectCreateOrConnectWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectCreateOrConnectWithoutService_planInput)
    connectOrCreate?: Array<ServiceObjectCreateOrConnectWithoutService_planInput>;

    @Field(() => [ServiceObjectUpsertWithWhereUniqueWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectUpsertWithWhereUniqueWithoutService_planInput)
    upsert?: Array<ServiceObjectUpsertWithWhereUniqueWithoutService_planInput>;

    @Field(() => ServiceObjectCreateManyService_planInputEnvelope, {nullable:true})
    @Type(() => ServiceObjectCreateManyService_planInputEnvelope)
    createMany?: ServiceObjectCreateManyService_planInputEnvelope;

    @Field(() => [ServiceObjectWhereUniqueInput], {nullable:true})
    @Type(() => ServiceObjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>>;

    @Field(() => [ServiceObjectWhereUniqueInput], {nullable:true})
    @Type(() => ServiceObjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>>;

    @Field(() => [ServiceObjectWhereUniqueInput], {nullable:true})
    @Type(() => ServiceObjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>>;

    @Field(() => [ServiceObjectWhereUniqueInput], {nullable:true})
    @Type(() => ServiceObjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>>;

    @Field(() => [ServiceObjectUpdateWithWhereUniqueWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectUpdateWithWhereUniqueWithoutService_planInput)
    update?: Array<ServiceObjectUpdateWithWhereUniqueWithoutService_planInput>;

    @Field(() => [ServiceObjectUpdateManyWithWhereWithoutService_planInput], {nullable:true})
    @Type(() => ServiceObjectUpdateManyWithWhereWithoutService_planInput)
    updateMany?: Array<ServiceObjectUpdateManyWithWhereWithoutService_planInput>;

    @Field(() => [ServiceObjectScalarWhereInput], {nullable:true})
    @Type(() => ServiceObjectScalarWhereInput)
    deleteMany?: Array<ServiceObjectScalarWhereInput>;
}
