import { seedItems } from "./seeds/seedItems";
import { seedUsers } from "./seeds/seedUsers";
async function main() {
  await seedUsers();
  await seedItems();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });
