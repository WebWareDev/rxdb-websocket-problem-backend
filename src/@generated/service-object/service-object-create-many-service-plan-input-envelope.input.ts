import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceObjectCreateManyService_planInput } from './service-object-create-many-service-plan.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceObjectCreateManyService_planInputEnvelope {

    @Field(() => [ServiceObjectCreateManyService_planInput], {nullable:false})
    @Type(() => ServiceObjectCreateManyService_planInput)
    data!: Array<ServiceObjectCreateManyService_planInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
