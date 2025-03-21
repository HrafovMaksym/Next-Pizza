import { _ingredients, categories, products } from "../constants";
import { prisma } from "../prismaClient";
import pizzaPep from "@/assets/images/peperoni.webp";
import pizzaChes from "@/assets/images/cheese.webp";
import pizzaFresh from "@/assets/images/pizza3.webp";
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
  const pizza1 = await prisma.product.create({
    data: {
      name: "Pepperoni fresh",
      imageUrl: String(pizzaPep),
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Cheese",
      imageUrl: String(pizzaChes),
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Chorizo fresh",
      imageUrl: String(pizzaFresh),
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
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
