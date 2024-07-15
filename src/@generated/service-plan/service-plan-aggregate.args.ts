import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { Type } from 'class-transformer';
import { ServicePlanOrderByWithRelationInput } from './service-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServicePlanWhereUniqueInput } from './service-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServicePlanCountAggregateInput } from './service-plan-count-aggregate.input';
import { ServicePlanAvgAggregateInput } from './service-plan-avg-aggregate.input';
import { ServicePlanSumAggregateInput } from './service-plan-sum-aggregate.input';
import { ServicePlanMinAggregateInput } from './service-plan-min-aggregate.input';
import { ServicePlanMaxAggregateInput } from './service-plan-max-aggregate.input';

@ArgsType()
export class ServicePlanAggregateArgs {

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

    @Field(() => ServicePlanCountAggregateInput, {nullable:true})
    _count?: ServicePlanCountAggregateInput;

    @Field(() => ServicePlanAvgAggregateInput, {nullable:true})
    _avg?: ServicePlanAvgAggregateInput;

    @Field(() => ServicePlanSumAggregateInput, {nullable:true})
    _sum?: ServicePlanSumAggregateInput;

    @Field(() => ServicePlanMinAggregateInput, {nullable:true})
    _min?: ServicePlanMinAggregateInput;

    @Field(() => ServicePlanMaxAggregateInput, {nullable:true})
    _max?: ServicePlanMaxAggregateInput;
}
