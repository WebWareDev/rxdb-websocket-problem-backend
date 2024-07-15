import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ServicePlanOrderByWithRelationInput } from '../service-plan/service-plan-order-by-with-relation.input';

@InputType()
export class ServiceObjectOrderByWithRelationInput {

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

    @Field(() => SortOrderInput, {nullable:true})
    type_name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    master_so_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    serial_number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    latitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    longitude?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    track_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    position_number?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    machine_room_name?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    img_dev?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    img_mnt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    ts_inserted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ts_updated?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_completed?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    deleted?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ts_deleted?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    vendor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    build_year?: SortOrderInput;

    @Field(() => ServicePlanOrderByWithRelationInput, {nullable:true})
    service_plan?: ServicePlanOrderByWithRelationInput;
}
