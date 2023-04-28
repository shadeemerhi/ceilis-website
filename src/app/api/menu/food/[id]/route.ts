import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { ICreateItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { FoodItem } from "@prisma/client";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    const data = (await req.json()) as ICreateItemInput<FoodItem>;
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
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

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
