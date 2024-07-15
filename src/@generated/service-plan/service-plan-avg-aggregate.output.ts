import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServicePlanAvgAggregate {

    @Field(() => Float, {nullable:true})
    status_id?: number;

    @Field(() => Float, {nullable:true})
    owner_id?: number;

    @Field(() => Float, {nullable:true})
    sort_id?: number;
}
