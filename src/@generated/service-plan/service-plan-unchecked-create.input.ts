import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ServiceObjectUncheckedCreateNestedManyWithoutService_planInput } from '../service-object/service-object-unchecked-create-nested-many-without-service-plan.input';

@InputType()
export class ServicePlanUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    sp_id!: string;

    @Field(() => String, {nullable:false})
    resort_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    status_id!: number;

    @Field(() => Int, {nullable:true})
    owner_id?: number;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date | string;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date | string;

    @Field(() => Date, {nullable:true})
    ts_completed?: Date | string;

    @Field(() => Date, {nullable:true})
    ts_assigned?: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:true})
    sort_id?: number;

    @Field(() => Date, {nullable:true})
    ts_deleted?: Date | string;

    @Field(() => ServiceObjectUncheckedCreateNestedManyWithoutService_planInput, {nullable:true})
    service_object?: ServiceObjectUncheckedCreateNestedManyWithoutService_planInput;
}
