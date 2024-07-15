import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ServiceObjectUpdateManyWithoutService_planNestedInput } from '../service-object/service-object-update-many-without-service-plan-nested.input';

@InputType()
export class ServicePlanUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sp_id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    ts_inserted?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    ts_updated?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    deleted?: BoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sort_id?: IntFieldUpdateOperationsInput;

    @Field(() => ServiceObjectUpdateManyWithoutService_planNestedInput, {nullable:true})
    service_object?: ServiceObjectUpdateManyWithoutService_planNestedInput;
}
