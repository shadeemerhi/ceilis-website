import { ICreateFoodItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

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
    return new NextResponse("Failed to update food item", {
      status: 500,
    });
  }
}

export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    const { id } = params;

    const item = await prisma.foodItem.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ item });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to delete food item", {
      status: 500,
    });
  }
}
