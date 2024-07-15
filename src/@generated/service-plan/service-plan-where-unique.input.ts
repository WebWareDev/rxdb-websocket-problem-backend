import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { ServiceObjectListRelationFilter } from '../service-object/service-object-list-relation-filter.input';

@InputType()
export class ServicePlanWhereUniqueInput {

    @Field(() => String, {nullable:true})
    sp_id?: string;

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    AND?: Array<ServicePlanWhereInput>;

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    OR?: Array<ServicePlanWhereInput>;

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    NOT?: Array<ServicePlanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    resort_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    status_id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    owner_id?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_inserted?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_updated?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    ts_completed?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    ts_assigned?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sort_id?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    ts_deleted?: DateTimeNullableFilter;

    @Field(() => ServiceObjectListRelationFilter, {nullable:true})
    service_object?: ServiceObjectListRelationFilter;
}
