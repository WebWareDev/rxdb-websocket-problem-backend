import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectCreateManyInput } from './service-object-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceObjectArgs {

    @Field(() => [ServiceObjectCreateManyInput], {nullable:false})
    @Type(() => ServiceObjectCreateManyInput)
    data!: Array<ServiceObjectCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
