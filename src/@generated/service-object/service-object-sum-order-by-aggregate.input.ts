import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServiceObjectSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;
}
