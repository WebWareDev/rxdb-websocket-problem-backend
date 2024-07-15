import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServicePlanCountAggregate } from './service-plan-count-aggregate.output';
import { ServicePlanAvgAggregate } from './service-plan-avg-aggregate.output';
import { ServicePlanSumAggregate } from './service-plan-sum-aggregate.output';
import { ServicePlanMinAggregate } from './service-plan-min-aggregate.output';
import { ServicePlanMaxAggregate } from './service-plan-max-aggregate.output';

@ObjectType()
export class AggregateServicePlan {

    @Field(() => ServicePlanCountAggregate, {nullable:true})
    _count?: ServicePlanCountAggregate;

    @Field(() => ServicePlanAvgAggregate, {nullable:true})
    _avg?: ServicePlanAvgAggregate;

    @Field(() => ServicePlanSumAggregate, {nullable:true})
    _sum?: ServicePlanSumAggregate;

    @Field(() => ServicePlanMinAggregate, {nullable:true})
    _min?: ServicePlanMinAggregate;

    @Field(() => ServicePlanMaxAggregate, {nullable:true})
    _max?: ServicePlanMaxAggregate;
}
