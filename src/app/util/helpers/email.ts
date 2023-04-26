import NewReservationEmail from "@/app/components/email/NewReservationEmail";
import { Reservation } from "@prisma/client";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";
import { getManagerEmails } from "./users";
import ReservationConfirmedEmail from "@/app/components/email/ReservationConfirmedEmail";
import ReservationCancelledEmail from "@/app/components/email/ReservationCancelledEmail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

const SENDGRID_EMAIL = "shadeetesting2@gmail.com";

export const sendNewReservationEmailToAdmins = async (
  reservation: Reservation
) => {
  const managerEmails = await getManagerEmails();

  const html = render(
    NewReservationEmail({
      reservation,
    })
  );

  const options = {
    to: managerEmails,
    from: SENDGRID_EMAIL, // must be verified Single Sender email address
    subject: "New Reservation",
    html,
  };

  /**
   * Send email
   */
  return await sgMail.send(options);
};

export const sendReservationConfirmationEmailToCustomer = async ({
  reservation,
  token,
}: {
  reservation: Reservation;
  token: string;
}) => {
  const { email } = reservation;

  const html = render(ReservationConfirmedEmail({ reservation, token }));

  const options = {
    to: email,
    from: SENDGRID_EMAIL, // will be Ceili's email
    subject: "Ceili's Royal Oak Reservation",
    html,
  };

  try {
    return await sgMail.send(options);
  } catch (error) {
    console.log("sendReservationConfirmationEmailToCustomer error", error);
    throw error;
  }
};

export const sendReservationCancellationEmailToManagers = async (
  reservation: Reservation
) => {
  try {
    const managerEmails = await getManagerEmails();

    const html = render(
      ReservationCancelledEmail({
        reservation,
      })
    );

    const options = {
      to: managerEmails,
      from: "shadmerhi@gmail.com", // must be verified Single Sender email address
      subject: "New Reservation",
      html,
    };

    /**
     * Send email
     */
    return await sgMail.send(options);
  } catch (error) {
    console.log("sendReservationCancellationEmailToManagers", error);
    throw error;
  }
};
