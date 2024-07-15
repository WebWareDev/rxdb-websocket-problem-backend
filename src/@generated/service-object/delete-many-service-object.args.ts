import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectWhereInput } from './service-object-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceObjectArgs {

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    @Type(() => ServiceObjectWhereInput)
    where?: ServiceObjectWhereInput;
}
