import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanUpdateInput } from './service-plan-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';

@ArgsType()
export class UpdateOneServicePlanArgs {

    @Field(() => ServicePlanUpdateInput, {nullable:false})
    @Type(() => ServicePlanUpdateInput)
    data!: ServicePlanUpdateInput;

    @Field(() => ServicePlanWhereUniqueInput, {nullable:false})
    @Type(() => ServicePlanWhereUniqueInput)
    where!: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;
}
