import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceObjectAvgAggregate {

    @Field(() => Float, {nullable:true})
    status_id?: number;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => Float, {nullable:true})
    position_number?: number;

    @Field(() => Float, {nullable:true})
    sort_id?: number;

    @Field(() => Float, {nullable:true})
    build_year?: number;
}
