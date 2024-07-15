import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectCreateInput } from './service-object-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServiceObjectArgs {

    @Field(() => ServiceObjectCreateInput, {nullable:false})
    @Type(() => ServiceObjectCreateInput)
    data!: ServiceObjectCreateInput;
}
