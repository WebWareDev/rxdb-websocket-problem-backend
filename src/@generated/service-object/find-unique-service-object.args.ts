import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueServiceObjectArgs {

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:false})
    @Type(() => ServiceObjectWhereUniqueInput)
    where!: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;
}
