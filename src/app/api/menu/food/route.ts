import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await prisma.foodCategory.findMany({
      include: {
        items: true,
      },
    });
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch food items", {
      status: 500,
    });
  }
}
