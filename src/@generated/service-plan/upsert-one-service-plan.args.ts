import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { Type } from 'class-transformer';
import { ServicePlanCreateInput } from './service-plan-create.input';
import { ServicePlanUpdateInput } from './service-plan-update.input';

@ArgsType()
export class UpsertOneServicePlanArgs {

    @Field(() => ServicePlanWhereUniqueInput, {nullable:false})
    @Type(() => ServicePlanWhereUniqueInput)
    where!: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;

    @Field(() => ServicePlanCreateInput, {nullable:false})
    @Type(() => ServicePlanCreateInput)
    create!: ServicePlanCreateInput;

    @Field(() => ServicePlanUpdateInput, {nullable:false})
    @Type(() => ServicePlanUpdateInput)
    update!: ServicePlanUpdateInput;
}
