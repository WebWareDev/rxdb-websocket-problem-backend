import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceObjectUpdateWithoutService_planInput } from './service-object-update-without-service-plan.input';
import { ServiceObjectCreateWithoutService_planInput } from './service-object-create-without-service-plan.input';

@InputType()
export class ServiceObjectUpsertWithWhereUniqueWithoutService_planInput {

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:false})
    @Type(() => ServiceObjectWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;

    @Field(() => ServiceObjectUpdateWithoutService_planInput, {nullable:false})
    @Type(() => ServiceObjectUpdateWithoutService_planInput)
    update!: ServiceObjectUpdateWithoutService_planInput;

    @Field(() => ServiceObjectCreateWithoutService_planInput, {nullable:false})
    @Type(() => ServiceObjectCreateWithoutService_planInput)
    create!: ServiceObjectCreateWithoutService_planInput;
}
