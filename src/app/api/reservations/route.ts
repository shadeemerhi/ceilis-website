import { handleNewReservation } from "@/app/util/helpers/reservations";
import { ICreateReservationInput } from "@/app/util/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {}

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
