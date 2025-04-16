import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) { // ✅ FIXED
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const token = crypto.randomBytes(32).toString("hex");

  await prisma.user.update({
    where: { email },
    data: {
      resetToken: token,
      resetTokenExpriry: Date.now() + 3600000, // 1 hour expiry
    },
  });

  const resetUrl = `http://localhost:3000/reset-password?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
      auth: {
        user: "monikahj7@gmail.com",     // ✅ Replace with your Gmail
        pass: "your_app_password",        // ✅ Use Gmail App Password
      },
    });

  await transporter.sendMail({
    from: "your_email@gmail.com",
    to: email,
    subject: "Password Reset Link",
    html: `
      <p>Hi,</p>
      <p>You requested to reset your password.</p>
      <p>Click the link below to reset:</p>
      <a href="${resetUrl}">${resetUrl}</a>
      <p>This link expires in 1 hour.</p>
    `,
  });

  return NextResponse.json({ message: "Reset email sent successfully" }, { status: 200 });
}
