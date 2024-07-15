import { registerEnumType } from '@nestjs/graphql';

export enum ServicePlanScalarFieldEnum {
    sp_id = "sp_id",
    description = "description",
    ts_inserted = "ts_inserted",
    ts_updated = "ts_updated",
    deleted = "deleted",
    sort_id = "sort_id"
}


registerEnumType(ServicePlanScalarFieldEnum, { name: 'ServicePlanScalarFieldEnum', description: undefined })
