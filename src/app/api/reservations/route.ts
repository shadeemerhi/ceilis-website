import { NextResponse } from "next/server";

export async function GET(req: Request) {}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("HERE IS DATA", data);

    await new Promise((r) => setTimeout(r, 2000));

    return NextResponse.json({ message: "Shadee Merhi" });
  } catch (error) {
    console.log(error);
  }
}
