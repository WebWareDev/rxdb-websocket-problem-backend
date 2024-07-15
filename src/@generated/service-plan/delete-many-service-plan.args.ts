import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanWhereInput } from './service-plan-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServicePlanArgs {

    @Field(() => ServicePlanWhereInput, {nullable:true})
    @Type(() => ServicePlanWhereInput)
    where?: ServicePlanWhereInput;
}
