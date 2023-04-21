import prisma from "@/prisma/client";
import { FoodItem } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.foodCategory.findMany({
      include: {
        items: true,
      },
    });
    return NextResponse.json({ categories });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch food items", {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Omit<FoodItem, "id">;
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to create food item", {
      status: 500,
    });
  }
}
