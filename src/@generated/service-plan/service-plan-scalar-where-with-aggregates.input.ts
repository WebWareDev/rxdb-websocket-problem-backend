import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ServicePlanScalarWhereWithAggregatesInput {

    @Field(() => [ServicePlanScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServicePlanScalarWhereWithAggregatesInput>;

    @Field(() => [ServicePlanScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServicePlanScalarWhereWithAggregatesInput>;

    @Field(() => [ServicePlanScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServicePlanScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sp_id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    ts_inserted?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    ts_updated?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    deleted?: BoolWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sort_id?: IntWithAggregatesFilter;
}
