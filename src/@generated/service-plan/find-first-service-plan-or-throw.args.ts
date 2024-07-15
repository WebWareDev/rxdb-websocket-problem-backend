import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { Type } from 'class-transformer';
import { ServicePlanOrderByWithRelationInput } from './service-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServicePlanScalarFieldEnum } from './service-plan-scalar-field.enum';

@ArgsType()
export class FindFirstServicePlanOrThrowArgs {

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;

    @Field(() => [ServicePlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServicePlanOrderByWithRelationInput>;

    @Field(() => ServicePlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServicePlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServicePlanScalarFieldEnum>;
}
