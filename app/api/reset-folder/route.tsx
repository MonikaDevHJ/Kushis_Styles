import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { token, newPassword } = await req.json();

  if (!token || !newPassword) {
    return NextResponse.json({ message: "Token and new password are required" }, { status: 400 });
  }

  const user = await prisma.user.findFirst({
    where: {
      resetToken: token,
      resetTokenExpriry: {
        gte: Date.now(), // still valid
      },
    },
  });

  if (!user) {
    return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
      resetToken: null,
      resetTokenExpriry: null,
    },
  });

  return NextResponse.json({ message: "Password reset successful" }, { status: 200 });
}
