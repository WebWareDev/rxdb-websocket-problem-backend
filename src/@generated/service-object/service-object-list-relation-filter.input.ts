import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectWhereInput } from './service-object-where.input';

@InputType()
export class ServiceObjectListRelationFilter {

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    every?: ServiceObjectWhereInput;

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    some?: ServiceObjectWhereInput;

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    none?: ServiceObjectWhereInput;
}
