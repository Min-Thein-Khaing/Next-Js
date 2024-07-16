import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const users = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!users) {
    return NextResponse.json({ error: "User NOT found" }, { status: 404 });
  }
  return NextResponse.json(users);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "User required" }, { status: 400 });
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updateUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 400 });
  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });
  return NextResponse.json({});
}
