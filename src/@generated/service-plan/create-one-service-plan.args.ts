import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanCreateInput } from './service-plan-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServicePlanArgs {

    @Field(() => ServicePlanCreateInput, {nullable:false})
    @Type(() => ServicePlanCreateInput)
    data!: ServicePlanCreateInput;
}
