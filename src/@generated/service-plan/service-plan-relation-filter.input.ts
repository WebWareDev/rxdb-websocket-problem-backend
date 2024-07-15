import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';

@InputType()
export class ServicePlanRelationFilter {

    @Field(() => ServicePlanWhereInput, {nullable:true})
    is?: ServicePlanWhereInput;

    @Field(() => ServicePlanWhereInput, {nullable:true})
    isNot?: ServicePlanWhereInput;
}
