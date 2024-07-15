import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceObjectCreateInput } from './service-object-create.input';
import { ServiceObjectUpdateInput } from './service-object-update.input';

@ArgsType()
export class UpsertOneServiceObjectArgs {

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:false})
    @Type(() => ServiceObjectWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;

    @Field(() => ServiceObjectCreateInput, {nullable:false})
    @Type(() => ServiceObjectCreateInput)
    create!: ServiceObjectCreateInput;

    @Field(() => ServiceObjectUpdateInput, {nullable:false})
    @Type(() => ServiceObjectUpdateInput)
    update!: ServiceObjectUpdateInput;
}
