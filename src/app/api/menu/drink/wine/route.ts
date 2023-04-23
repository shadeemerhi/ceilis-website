import { ICreateItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { WineItem } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ICreateItemInput<WineItem>;

    const item = await prisma.wineItem.create({
      data,
    });

    return NextResponse.json({ item });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create food item", {
      status: 500,
    });
  }
}
