import { FoodItem } from "@prisma/client";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";
import { ICreateFoodItemInput } from "@/app/util/types";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const data = (await req.json()) as ICreateFoodItemInput;
    const { id } = params;

    const item = await prisma.foodItem.update({
      where: {
        id,
      },
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
