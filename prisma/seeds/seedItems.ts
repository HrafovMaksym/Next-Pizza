import { _ingredients, categories, products } from "../constants";
import { prisma } from "../prismaClient";

async function up() {
  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredients.createMany({
    data: _ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
}

export async function seedItems() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
