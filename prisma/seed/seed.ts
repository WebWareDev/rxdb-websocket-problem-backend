import { createSeedClient } from "@snaplet/seed";
import { faker, he } from '@faker-js/faker';

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  const spIds = [
    'CHECKLIST_XXX_AM_2',
    'CHECKLIST_XXX_AM',
    'CHECKLIST_XX5',
  ];


  const {servicePlan} = await seed.servicePlan((x) =>
    spIds.map((spId) => {
      return {
        sp_id: spId,
        resort_id: '8bbf66d8-d894-47df-a12e-c00f4c1f0e60',
        description: faker.lorem.sentence(),
        status_id: faker.number.int(3),
        owner_id: 13,
        ts_inserted: faker.date.recent(),
        ts_updated: faker.date.recent(),
        ts_completed: faker.date.recent(),
        ts_assigned: faker.date.recent(),
        deleted: 0,
        ts_deleted: faker.date.recent(),
      };
    }
  ));
  const servicePlanIds = servicePlan.map((servicePlan) => servicePlan.sp_id);


  const soIds = [
    'SO-00000011',
    'SO-00000012-XX',
    'SO-00000013-XX',
    'SO-00000092-XX',
    'SO-00000093-XX',
    'SO-00000012',
    'SO-00000013',
    'SO-00000366',
    'SO-00000369',
    'SO-00000371',
  ];

  await seed.serviceObject((x) =>
    soIds.map((soId) => {
      const spId = soId == 'SO-00000092-XX' ? 'CHECKLIST_XXX_AM_2' : faker.helpers.arrayElement(servicePlanIds);
      return {
        sp_id: spId,
        so_id: soId,
        name: faker.lorem.sentence(),
        description: faker.lorem.sentence(),
        type_id: faker.string.uuid(),
        type_name: faker.lorem.sentence(),
        master_so_id: faker.string.uuid(),
        status_id: faker.number.int(3),
        serial_number: faker.string.uuid(),
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        track_name: faker.lorem.sentence(),
        position_number: faker.number.int(100),
        machine_room_name: faker.lorem.sentence(),
        img_dev: faker.image.imageUrl(),
        img_mnt: faker.image.imageUrl(),
        ts_inserted: faker.date.recent(),
        ts_updated: faker.date.recent(),
        ts_completed: faker.date.recent(),
        deleted: 0,
        ts_deleted: faker.date.recent(),
        vendor_id: faker.string.uuid(),
        build_year: faker.number.int(2021),
      };
    }),
    {connect: {servicePlan}}
  );

  console.log("Database seeded successfully!");

  process.exit();
};

main();
