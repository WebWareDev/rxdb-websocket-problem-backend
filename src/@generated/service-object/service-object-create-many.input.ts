import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ServiceObjectCreateManyInput {

    @Field(() => String, {nullable:false})
    sp_id!: string;

    @Field(() => String, {nullable:false})
    so_id!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    ts_inserted!: Date | string;

    @Field(() => Date, {nullable:false})
    ts_updated!: Date | string;

    @Field(() => Boolean, {nullable:false})
    deleted!: boolean;

    @Field(() => Int, {nullable:true})
    sort_id?: number;
}
