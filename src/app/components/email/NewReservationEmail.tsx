import { Reservation } from "@prisma/client";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from "@react-email/components";
import ReservationContent from "./ReservationContent";

interface INewReservationEmail {
  reservation: Reservation;
}

const NewReservationEmail = ({ reservation }: INewReservationEmail) => {
  return (
    <Html>
      <Head />
      <Preview>New Reservation from {reservation.name}</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="rounded-lg py-8 text-center">
            <Section className="border border-solid border-[#eaeaea] rounded-md p-10">
              <Img
                src={`https://ceilisroyaloak.com/wp-content/uploads/2020/05/cropped-ceilislogositeheader.png`}
                className="h-10 w-auto"
                alt="Ceilis"
              />
              <Hr className="border-[0.5px] border-solid border-zinc-200 my-4" />
              <Heading className="text-zinc-800">Reservation Details</Heading>
              <ReservationContent reservation={reservation} />
              <Section className="text-center">
                <Button
                  pX={20}
                  pY={12}
                  className="bg-amber-500 rounded text-white font-semibold no-underline text-center text-lg"
                  href={`${process.env.BASE_URL}/admin/reservations/${reservation.id}`}
                  target="_blank"
                >
                  Confirm Reservation
                </Button>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewReservationEmail;
