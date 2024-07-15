import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectUpdateInput } from './service-object-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';

@ArgsType()
export class UpdateOneServiceObjectArgs {

    @Field(() => ServiceObjectUpdateInput, {nullable:false})
    @Type(() => ServiceObjectUpdateInput)
    data!: ServiceObjectUpdateInput;

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:false})
    @Type(() => ServiceObjectWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;
}
