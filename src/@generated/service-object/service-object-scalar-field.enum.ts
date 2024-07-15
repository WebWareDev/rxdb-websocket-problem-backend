import { registerEnumType } from '@nestjs/graphql';

export enum ServiceObjectScalarFieldEnum {
    sp_id = "sp_id",
    so_id = "so_id",
    name = "name",
    description = "description",
    type_id = "type_id",
    type_name = "type_name",
    master_so_id = "master_so_id",
    status_id = "status_id",
    serial_number = "serial_number",
    latitude = "latitude",
    longitude = "longitude",
    track_name = "track_name",
    position_number = "position_number",
    machine_room_name = "machine_room_name",
    img_dev = "img_dev",
    img_mnt = "img_mnt",
    ts_inserted = "ts_inserted",
    ts_updated = "ts_updated",
    ts_completed = "ts_completed",
    deleted = "deleted",
    sort_id = "sort_id",
    ts_deleted = "ts_deleted",
    vendor = "vendor",
    build_year = "build_year"
}


registerEnumType(ServiceObjectScalarFieldEnum, { name: 'ServiceObjectScalarFieldEnum', description: undefined })
