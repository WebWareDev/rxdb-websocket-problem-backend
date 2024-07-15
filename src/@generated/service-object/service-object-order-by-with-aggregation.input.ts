import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
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
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    type_name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    master_so_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serial_number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    latitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    longitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    track_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    position_number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    machine_room_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    img_dev?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    img_mnt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_completed?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_deleted?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    vendor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    build_year?: SortOrderInput;

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
