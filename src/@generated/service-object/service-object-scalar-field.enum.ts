import { registerEnumType } from '@nestjs/graphql';

export enum ServiceObjectScalarFieldEnum {
    sp_id = "sp_id",
    so_id = "so_id",
    description = "description",
    ts_inserted = "ts_inserted",
    ts_updated = "ts_updated",
    deleted = "deleted",
    sort_id = "sort_id"
}


registerEnumType(ServiceObjectScalarFieldEnum, { name: 'ServiceObjectScalarFieldEnum', description: undefined })
