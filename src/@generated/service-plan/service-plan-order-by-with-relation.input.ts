import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ServiceObjectOrderByRelationAggregateInput } from '../service-object/service-object-order-by-relation-aggregate.input';

@InputType()
export class ServicePlanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    sp_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resort_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    owner_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_completed?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    ts_assigned?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_deleted?: SortOrderInput;

    @Field(() => ServiceObjectOrderByRelationAggregateInput, {nullable:true})
    service_object?: ServiceObjectOrderByRelationAggregateInput;
}
