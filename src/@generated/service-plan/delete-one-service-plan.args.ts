import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneServicePlanArgs {

    @Field(() => ServicePlanWhereUniqueInput, {nullable:false})
    @Type(() => ServicePlanWhereUniqueInput)
    where!: Prisma.AtLeast<ServicePlanWhereUniqueInput, 'sp_id'>;
}
