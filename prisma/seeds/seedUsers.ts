import { prisma } from "../prismaClient";
import { hashSync } from "bcrypt";
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

export async function seedUsers() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
