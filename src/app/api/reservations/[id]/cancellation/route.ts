import {
  handleReservationCancellation,
  isValidReservationToken,
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
    const { id } = params;

    if (!(await isValidReservationToken(id, token))) {
      return new NextResponse("Invalid token", {
        status: 401,
      });
    }

    const reservation = await handleReservationCancellation({ id, token });

    return NextResponse.json({ reservation });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to cancel reservation", {
      status: 500,
    });
  }
}
