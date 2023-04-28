import { userIsManager } from "@/app/util/helpers/userIsManager";
import { getCurrentUser } from "@/app/util/helpers/users";
import { ICreateItemInput } from "@/app/util/types";
import prisma from "@/prisma/client";
import { SpiritItem } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

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
