import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectWhereInput } from './service-object-where.input';
import { Type } from 'class-transformer';
import { ServiceObjectOrderByWithRelationInput } from './service-object-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceObjectScalarFieldEnum } from './service-object-scalar-field.enum';

@ArgsType()
export class FindFirstServiceObjectOrThrowArgs {

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    @Type(() => ServiceObjectWhereInput)
    where?: ServiceObjectWhereInput;

    @Field(() => [ServiceObjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceObjectOrderByWithRelationInput>;

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServiceObjectScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServiceObjectScalarFieldEnum>;
}
