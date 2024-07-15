import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServiceObjectMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    sp_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    so_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    master_so_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serial_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    track_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position_number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    machine_room_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img_dev?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img_mnt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    vendor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    build_year?: keyof typeof SortOrder;
}
