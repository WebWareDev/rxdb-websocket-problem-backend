import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceObjectCreateWithoutService_planInput } from './service-object-create-without-service-plan.input';

@InputType()
export class ServiceObjectCreateOrConnectWithoutService_planInput {

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:false})
    @Type(() => ServiceObjectWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;

    @Field(() => ServiceObjectCreateWithoutService_planInput, {nullable:false})
    @Type(() => ServiceObjectCreateWithoutService_planInput)
    create!: ServiceObjectCreateWithoutService_planInput;
}
