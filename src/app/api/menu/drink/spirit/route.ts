import { ICreateItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { SpiritItem } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ICreateItemInput<SpiritItem>;

    const item = await prisma.spiritItem.create({
      data,
    });

    return NextResponse.json({ item });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create spirit item", {
      status: 500,
    });
  }
}
