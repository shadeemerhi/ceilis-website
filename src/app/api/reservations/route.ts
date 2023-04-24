import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import NewReservationEmail from "@/app/components/email/NewReservationEmail";
import sgMail from "@sendgrid/mail";
import { ICreateReservationInput } from "@/app/util/types";
import prisma from "@/prisma/client";

export async function GET(req: Request) {}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ICreateReservationInput;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    const reservation = await prisma.reservation.create({
      data,
    });

    const html = render(
      NewReservationEmail({
        reservation,
      })
    );

    const options = {
      to: "shadeetesting1@gmail.com",
      from: "shadmerhi@gmail.com", // must be verified Single Sender email address
      subject: "New Reservation",
      text: "Hello from SendGrid",
      html,
    };

    await sgMail.send(options);

    return NextResponse.json({
      message: "Reservation request successfully sent",
    });
  } catch (error) {
    console.log(error);

    return new NextResponse("Failed to send reservation request", {
      status: 500,
    });
  }
}
