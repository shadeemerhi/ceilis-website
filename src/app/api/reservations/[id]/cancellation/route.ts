import {
  handleReservationCancellation,
  handleReservationConfirmation,
} from "@/app/util/helpers/reservations";
import { NextResponse } from "next/server";

interface RouteParams {
  params: {
    id: string;
  };
}

export async function POST(req: Request, { params }: RouteParams) {
  try {
    const { token } = (await req.json()) as { token: string };

    if (!token) {
      return new NextResponse("No token provided", {
        status: 401,
      });
    }

    const { id } = params;

    const reservation = await handleReservationCancellation({ id, token });

    return NextResponse.json({ reservation });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to cancel reservation", {
      status: 500,
    });
  }
}
