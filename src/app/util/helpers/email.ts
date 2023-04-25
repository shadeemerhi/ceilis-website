import NewReservationEmail from "@/app/components/email/NewReservationEmail";
import { Reservation } from "@prisma/client";
import { render } from "@react-email/render";
import sgMail from "@sendgrid/mail";

export const sendNewReservationEmailToAdmins = async (
  reservation: Reservation
) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  /**
   * Get admin emails
   */
  //   const adminEmails = await prisma.user.findMany({
  //     where: "they-are-admin",
  //     select: {
  //       email: true,
  //     },
  //   });
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
