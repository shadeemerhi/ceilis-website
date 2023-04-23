import { ICreateItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { BeerItem } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ICreateItemInput<BeerItem>;

    const item = await prisma.beerItem.create({
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
