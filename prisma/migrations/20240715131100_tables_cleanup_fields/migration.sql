/*
  Warnings:

  - You are about to drop the column `build_year` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `img_dev` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `img_mnt` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `machine_room_name` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `master_so_id` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `position_number` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `serial_number` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `status_id` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `track_name` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `ts_completed` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `ts_deleted` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `type_name` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `vendor` on the `service_object` table. All the data in the column will be lost.
  - You are about to drop the column `owner_id` on the `service_plan` table. All the data in the column will be lost.
  - You are about to drop the column `resort_id` on the `service_plan` table. All the data in the column will be lost.
  - You are about to drop the column `status_id` on the `service_plan` table. All the data in the column will be lost.
  - You are about to drop the column `ts_assigned` on the `service_plan` table. All the data in the column will be lost.
  - You are about to drop the column `ts_completed` on the `service_plan` table. All the data in the column will be lost.
  - You are about to drop the column `ts_deleted` on the `service_plan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `service_object` DROP COLUMN `build_year`,
    DROP COLUMN `img_dev`,
    DROP COLUMN `img_mnt`,
    DROP COLUMN `latitude`,
    DROP COLUMN `longitude`,
    DROP COLUMN `machine_room_name`,
    DROP COLUMN `master_so_id`,
    DROP COLUMN `name`,
    DROP COLUMN `position_number`,
    DROP COLUMN `serial_number`,
    DROP COLUMN `status_id`,
    DROP COLUMN `track_name`,
    DROP COLUMN `ts_completed`,
    DROP COLUMN `ts_deleted`,
    DROP COLUMN `type_id`,
    DROP COLUMN `type_name`,
    DROP COLUMN `vendor`;

-- AlterTable
ALTER TABLE `service_plan` DROP COLUMN `owner_id`,
    DROP COLUMN `resort_id`,
    DROP COLUMN `status_id`,
    DROP COLUMN `ts_assigned`,
    DROP COLUMN `ts_completed`,
    DROP COLUMN `ts_deleted`;
