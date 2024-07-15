import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceObjectMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sp_id?: true;

    @Field(() => Boolean, {nullable:true})
    so_id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    type_id?: true;

    @Field(() => Boolean, {nullable:true})
    type_name?: true;

    @Field(() => Boolean, {nullable:true})
    master_so_id?: true;

    @Field(() => Boolean, {nullable:true})
    status_id?: true;

    @Field(() => Boolean, {nullable:true})
    serial_number?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    track_name?: true;

    @Field(() => Boolean, {nullable:true})
    position_number?: true;

    @Field(() => Boolean, {nullable:true})
    machine_room_name?: true;

    @Field(() => Boolean, {nullable:true})
    img_dev?: true;

    @Field(() => Boolean, {nullable:true})
    img_mnt?: true;

    @Field(() => Boolean, {nullable:true})
    ts_inserted?: true;

    @Field(() => Boolean, {nullable:true})
    ts_updated?: true;

    @Field(() => Boolean, {nullable:true})
    ts_completed?: true;

    @Field(() => Boolean, {nullable:true})
    deleted?: true;

    @Field(() => Boolean, {nullable:true})
    sort_id?: true;

    @Field(() => Boolean, {nullable:true})
    ts_deleted?: true;

    @Field(() => Boolean, {nullable:true})
    vendor?: true;

    @Field(() => Boolean, {nullable:true})
    build_year?: true;
}
