import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectScalarWhereInput } from './service-object-scalar-where.input';
import { Type } from 'class-transformer';
import { ServiceObjectUpdateManyMutationInput } from './service-object-update-many-mutation.input';

@InputType()
export class ServiceObjectUpdateManyWithWhereWithoutService_planInput {

    @Field(() => ServiceObjectScalarWhereInput, {nullable:false})
    @Type(() => ServiceObjectScalarWhereInput)
    where!: ServiceObjectScalarWhereInput;

    @Field(() => ServiceObjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceObjectUpdateManyMutationInput)
    data!: ServiceObjectUpdateManyMutationInput;
}
