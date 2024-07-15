/*
  Warnings:

  - The primary key for the `service_object` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `service_plan` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `service_object` DROP FOREIGN KEY `service_object_sp_id_fkey`;

-- AlterTable
ALTER TABLE `service_object` DROP PRIMARY KEY,
    MODIFY `sp_id` VARCHAR(40) NOT NULL,
    MODIFY `so_id` VARCHAR(40) NOT NULL,
    ADD PRIMARY KEY (`sp_id`, `so_id`);

-- AlterTable
ALTER TABLE `service_plan` DROP PRIMARY KEY,
    MODIFY `sp_id` VARCHAR(40) NOT NULL,
    ADD PRIMARY KEY (`sp_id`);

-- AddForeignKey
ALTER TABLE `service_object` ADD CONSTRAINT `service_object_sp_id_fkey` FOREIGN KEY (`sp_id`) REFERENCES `service_plan`(`sp_id`) ON DELETE RESTRICT ON UPDATE NO ACTION;
