import { registerEnumType } from '@nestjs/graphql';

export enum ServicePlanScalarFieldEnum {
    sp_id = "sp_id",
    resort_id = "resort_id",
    description = "description",
    status_id = "status_id",
    owner_id = "owner_id",
    ts_inserted = "ts_inserted",
    ts_updated = "ts_updated",
    ts_completed = "ts_completed",
    ts_assigned = "ts_assigned",
    deleted = "deleted",
    sort_id = "sort_id",
    ts_deleted = "ts_deleted"
}


registerEnumType(ServicePlanScalarFieldEnum, { name: 'ServicePlanScalarFieldEnum', description: undefined })
