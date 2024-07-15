import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ServiceObjectScalarWhereInput {

    @Field(() => [ServiceObjectScalarWhereInput], {nullable:true})
    AND?: Array<ServiceObjectScalarWhereInput>;

    @Field(() => [ServiceObjectScalarWhereInput], {nullable:true})
    OR?: Array<ServiceObjectScalarWhereInput>;

    @Field(() => [ServiceObjectScalarWhereInput], {nullable:true})
    NOT?: Array<ServiceObjectScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sp_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    so_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type_id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    type_name?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    master_so_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    status_id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    serial_number?: StringNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    longitude?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    track_name?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    position_number?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    machine_room_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    img_dev?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    img_mnt?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_inserted?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_updated?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    ts_completed?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sort_id?: IntFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    ts_deleted?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    vendor?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    build_year?: IntNullableFilter;
}
