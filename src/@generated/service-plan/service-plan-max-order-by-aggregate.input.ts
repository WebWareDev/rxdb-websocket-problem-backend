import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServicePlanMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sp_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resort_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_assigned?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_deleted?: keyof typeof SortOrder;
}
