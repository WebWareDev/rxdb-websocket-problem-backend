import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanUpdateManyMutationInput } from './service-plan-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ServicePlanWhereInput } from './service-plan-where.input';

@ArgsType()
export class UpdateManyServicePlanArgs {

    @Field(() => ServicePlanUpdateManyMutationInput, {nullable:false})
    @Type(() => ServicePlanUpdateManyMutationInput)
    data!: ServicePlanUpdateManyMutationInput;

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;
}
