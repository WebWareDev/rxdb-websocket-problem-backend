import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { Type } from 'class-transformer';
import { ServicePlanOrderByWithAggregationInput } from './service-plan-order-by-with-aggregation.input';
import { ServicePlanScalarFieldEnum } from './service-plan-scalar-field.enum';
import { ServicePlanScalarWhereWithAggregatesInput } from './service-plan-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ServicePlanCountAggregateInput } from './service-plan-count-aggregate.input';
import { ServicePlanAvgAggregateInput } from './service-plan-avg-aggregate.input';
import { ServicePlanSumAggregateInput } from './service-plan-sum-aggregate.input';
import { ServicePlanMinAggregateInput } from './service-plan-min-aggregate.input';
import { ServicePlanMaxAggregateInput } from './service-plan-max-aggregate.input';

@ArgsType()
export class ServicePlanGroupByArgs {

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;

    @Field(() => [ServicePlanOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ServicePlanOrderByWithAggregationInput>;

    @Field(() => [ServicePlanScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ServicePlanScalarFieldEnum>;

    @Field(() => ServicePlanScalarWhereWithAggregatesInput, {nullable:true})
    having?: ServicePlanScalarWhereWithAggregatesInput;

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
