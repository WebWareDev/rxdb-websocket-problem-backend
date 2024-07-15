import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ServiceObjectListRelationFilter } from '../service-object/service-object-list-relation-filter.input';

@InputType()
export class ServicePlanWhereInput {

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    AND?: Array<ServicePlanWhereInput>;

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    OR?: Array<ServicePlanWhereInput>;

    @Field(() => [ServicePlanWhereInput], {nullable:true})
    NOT?: Array<ServicePlanWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sp_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_inserted?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_updated?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sort_id?: IntFilter;

    @Field(() => ServiceObjectListRelationFilter, {nullable:true})
    service_object?: ServiceObjectListRelationFilter;
}
