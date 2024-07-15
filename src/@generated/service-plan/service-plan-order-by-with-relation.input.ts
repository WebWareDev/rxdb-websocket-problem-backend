import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceObjectOrderByRelationAggregateInput } from '../service-object/service-object-order-by-relation-aggregate.input';

@InputType()
export class ServicePlanOrderByWithRelationInput {

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

    @Field(() => ServiceObjectOrderByRelationAggregateInput, {nullable:true})
    service_object?: ServiceObjectOrderByRelationAggregateInput;
}
