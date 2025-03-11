import { prisma } from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const user = await prisma.user.create({
    data: {
      fullName: "Maxon Text",
      email: "test@gmail.com",
      password: "1111",
    },
  });
  console.log("data user", user);

  return NextResponse.json({ message: "success" });
}
