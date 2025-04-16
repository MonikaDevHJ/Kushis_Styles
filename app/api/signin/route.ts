import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  // Compare password with hashed one
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // If successful
  return NextResponse.json({ message: "Login successful", user }, { status: 200 });
}
