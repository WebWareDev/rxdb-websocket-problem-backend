import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

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
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_inserted?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    ts_updated?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    deleted?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    sort_id?: IntFilter;
}
