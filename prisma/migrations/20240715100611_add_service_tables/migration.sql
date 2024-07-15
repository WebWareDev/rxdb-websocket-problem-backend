-- CreateTable
CREATE TABLE `service_object` (
    `sp_id` VARCHAR(20) NOT NULL,
    `so_id` VARCHAR(20) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `type_id` VARCHAR(20) NOT NULL,
    `type_name` VARCHAR(255) NULL,
    `master_so_id` VARCHAR(20) NOT NULL,
    `status_id` INTEGER NOT NULL,
    `serial_number` VARCHAR(255) NULL,
    `latitude` DOUBLE NULL,
    `longitude` DOUBLE NULL,
    `track_name` VARCHAR(255) NULL,
    `position_number` INTEGER NULL,
    `machine_room_name` VARCHAR(255) NULL,
    `img_dev` VARCHAR(255) NULL,
    `img_mnt` VARCHAR(255) NULL,
    `ts_inserted` DATETIME(3) NOT NULL,
    `ts_updated` DATETIME(3) NOT NULL,
    `ts_completed` DATETIME(3) NULL,
    `deleted` BOOLEAN NOT NULL,
    `sort_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ts_deleted` DATETIME(3) NULL,
    `vendor` VARCHAR(255) NULL,
    `build_year` INTEGER NULL,

    INDEX `service_object_sort_id_idx`(`sort_id`),
    PRIMARY KEY (`sp_id`, `so_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service_plan` (
    `sp_id` VARCHAR(20) NOT NULL,
    `resort_id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `status_id` INTEGER NOT NULL,
    `owner_id` INTEGER NULL,
    `ts_inserted` DATETIME(3) NOT NULL,
    `ts_updated` DATETIME(3) NOT NULL,
    `ts_completed` DATETIME(3) NULL,
    `ts_assigned` DATETIME(3) NULL,
    `deleted` BOOLEAN NOT NULL,
    `sort_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ts_deleted` DATETIME(3) NULL,

    UNIQUE INDEX `service_plan_resort_id_key`(`resort_id`),
    INDEX `service_plan_sort_id_idx`(`sort_id`),
    PRIMARY KEY (`sp_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `service_object` ADD CONSTRAINT `service_object_sp_id_fkey` FOREIGN KEY (`sp_id`) REFERENCES `service_plan`(`sp_id`) ON DELETE RESTRICT ON UPDATE NO ACTION;
