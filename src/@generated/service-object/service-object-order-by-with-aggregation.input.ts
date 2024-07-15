import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceObjectCountOrderByAggregateInput } from './service-object-count-order-by-aggregate.input';
import { ServiceObjectAvgOrderByAggregateInput } from './service-object-avg-order-by-aggregate.input';
import { ServiceObjectMaxOrderByAggregateInput } from './service-object-max-order-by-aggregate.input';
import { ServiceObjectMinOrderByAggregateInput } from './service-object-min-order-by-aggregate.input';
import { ServiceObjectSumOrderByAggregateInput } from './service-object-sum-order-by-aggregate.input';

@InputType()
export class ServiceObjectOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sp_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    so_id?: keyof typeof SortOrder;

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

    @Field(() => ServiceObjectCountOrderByAggregateInput, {nullable:true})
    _count?: ServiceObjectCountOrderByAggregateInput;

    @Field(() => ServiceObjectAvgOrderByAggregateInput, {nullable:true})
    _avg?: ServiceObjectAvgOrderByAggregateInput;

    @Field(() => ServiceObjectMaxOrderByAggregateInput, {nullable:true})
    _max?: ServiceObjectMaxOrderByAggregateInput;

    @Field(() => ServiceObjectMinOrderByAggregateInput, {nullable:true})
    _min?: ServiceObjectMinOrderByAggregateInput;

    @Field(() => ServiceObjectSumOrderByAggregateInput, {nullable:true})
    _sum?: ServiceObjectSumOrderByAggregateInput;
}
