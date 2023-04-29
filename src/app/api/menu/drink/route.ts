import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const beerCategories = await prisma.beerCategory.findMany({
    //   include: {
    //     items: true,
    //   },
    // });

    // const wineCategories = await prisma.wineCategory.findMany({
    //   include: {
    //     items: true,
    //   },
    // });

    // const spiritCategories = await prisma.spiritCategory.findMany({
    //   include: {
    //     items: true,
    //   },
    // });

    return NextResponse.json({
      beerCategories: [],
      wineCategories: [],
      spiritCategories: [],
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch drink items", {
      status: 500,
    });
  }
}
