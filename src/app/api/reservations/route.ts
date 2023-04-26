import {
  getReservations,
  handleNewReservation,
} from "@/app/util/helpers/reservations";
import { getCurrentUser, userIsManager } from "@/app/util/helpers/users";
import { ICreateReservationInput } from "@/app/util/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user || !userIsManager(user)) {
      return new NextResponse("Not authorized", {
        status: 401,
      });
    }

    const reservations = await getReservations();

    return NextResponse.json({ reservations });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to retrieve reservations", {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ICreateReservationInput;

    const reservation = await handleNewReservation(data);

    return NextResponse.json({
      message: "Reservation request successfully sent",
      reservationId: reservation.id,
    });
  } catch (error) {
    console.log(error);

    return new NextResponse("Failed to send reservation request", {
      status: 500,
    });
  }
}
