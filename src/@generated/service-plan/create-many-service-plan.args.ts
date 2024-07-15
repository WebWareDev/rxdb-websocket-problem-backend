import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServicePlanCreateManyInput } from './service-plan-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServicePlanArgs {

    @Field(() => [ServicePlanCreateManyInput], {nullable:false})
    @Type(() => ServicePlanCreateManyInput)
    data!: Array<ServicePlanCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
