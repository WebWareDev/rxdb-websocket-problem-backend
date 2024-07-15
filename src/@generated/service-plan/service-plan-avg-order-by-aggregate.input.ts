import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServicePlanAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    owner_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;
}
