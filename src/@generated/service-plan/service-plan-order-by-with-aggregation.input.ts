import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServicePlanCountOrderByAggregateInput } from './service-plan-count-order-by-aggregate.input';
import { ServicePlanAvgOrderByAggregateInput } from './service-plan-avg-order-by-aggregate.input';
import { ServicePlanMaxOrderByAggregateInput } from './service-plan-max-order-by-aggregate.input';
import { ServicePlanMinOrderByAggregateInput } from './service-plan-min-order-by-aggregate.input';
import { ServicePlanSumOrderByAggregateInput } from './service-plan-sum-order-by-aggregate.input';

@InputType()
export class ServicePlanOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sp_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => ServicePlanCountOrderByAggregateInput, {nullable:true})
    _count?: ServicePlanCountOrderByAggregateInput;

    @Field(() => ServicePlanAvgOrderByAggregateInput, {nullable:true})
    _avg?: ServicePlanAvgOrderByAggregateInput;

    @Field(() => ServicePlanMaxOrderByAggregateInput, {nullable:true})
    _max?: ServicePlanMaxOrderByAggregateInput;

    @Field(() => ServicePlanMinOrderByAggregateInput, {nullable:true})
    _min?: ServicePlanMinOrderByAggregateInput;

    @Field(() => ServicePlanSumOrderByAggregateInput, {nullable:true})
    _sum?: ServicePlanSumOrderByAggregateInput;
}
