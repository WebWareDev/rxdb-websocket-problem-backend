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
        description: faker.lorem.sentence(),
        ts_inserted: faker.date.recent(),
        ts_updated: faker.date.recent(),
        deleted: 0,
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
        description: faker.lorem.sentence(),
        ts_inserted: faker.date.recent(),
        ts_updated: faker.date.recent(),
        deleted: 0,
      };
    }),
    {connect: {servicePlan}}
  );

  console.log("Database seeded successfully!");

  process.exit();
};

main();
