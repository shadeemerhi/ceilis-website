import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { ICreateItemInput } from "@/app/util/types";
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
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    const data = (await req.json()) as ICreateItemInput<FoodItem>;

    const item = await prisma.foodItem.create({
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
