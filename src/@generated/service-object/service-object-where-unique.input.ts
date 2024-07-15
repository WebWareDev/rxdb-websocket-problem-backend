import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectSp_idSo_idCompoundUniqueInput } from './service-object-sp-id-so-id-compound-unique.input';
import { ServiceObjectWhereInput } from './service-object-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ServicePlanRelationFilter } from '../service-plan/service-plan-relation-filter.input';

@InputType()
export class ServiceObjectWhereUniqueInput {

    @Field(() => ServiceObjectSp_idSo_idCompoundUniqueInput, {nullable:true})
    sp_id_so_id?: ServiceObjectSp_idSo_idCompoundUniqueInput;

    @Field(() => [ServiceObjectWhereInput], {nullable:true})
    AND?: Array<ServiceObjectWhereInput>;

    @Field(() => [ServiceObjectWhereInput], {nullable:true})
    OR?: Array<ServiceObjectWhereInput>;

    @Field(() => [ServiceObjectWhereInput], {nullable:true})
    NOT?: Array<ServiceObjectWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sp_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    so_id?: StringFilter;

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

    @Field(() => ServicePlanRelationFilter, {nullable:true})
    service_plan?: ServicePlanRelationFilter;
}
