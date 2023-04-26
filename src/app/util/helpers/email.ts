import NewReservationEmail from "@/app/components/email/NewReservationEmail";
import { Reservation } from "@prisma/client";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";
import { getManagerEmails } from "./users";

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export const sendNewReservationEmailToAdmins = async (
  reservation: Reservation
) => {
  // const adminEmails = await getManagerEmails();
  const adminEmails = ["shadeetesting1@gmail.com"];

  const html = render(
    NewReservationEmail({
      reservation,
    })
  );

  const options = {
    to: adminEmails,
    from: "shadmerhi@gmail.com", // must be verified Single Sender email address
    subject: "New Reservation",
    html,
  };

  /**
   * Send email
   */
  return await sgMail.send(options);
};

export const sendReservationConfirmationEmailToCustomer = async (
  reservation: Reservation
) => {
  /**
   * @todo
   * Send email
   */
  await new Promise((r) => setTimeout(r, 2000));

  console.log(
    `Successfully sent Reservation ${reservation.id} confirmation email to ${reservation.email}`
  );
};
