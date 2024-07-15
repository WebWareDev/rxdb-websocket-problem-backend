import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectUpdateManyMutationInput } from './service-object-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ServiceObjectWhereInput } from './service-object-where.input';

@ArgsType()
export class UpdateManyServiceObjectArgs {

    @Field(() => ServiceObjectUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceObjectUpdateManyMutationInput)
    data!: ServiceObjectUpdateManyMutationInput;

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    @Type(() => ServiceObjectWhereInput)
    where?: ServiceObjectWhereInput;
}
