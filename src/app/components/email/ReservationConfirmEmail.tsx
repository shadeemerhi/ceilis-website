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
  Text,
} from "@react-email/components";
import ReservationContent from "./ReservationContent";

interface IReservationConfirmedProps {
  reservation: Reservation;
}

const ReservationConfirmedEmail = ({
  reservation,
}: IReservationConfirmedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reservation Confirmed!</Preview>
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
              <Text>Your reservation has been confirmed!</Text>
              <Heading className="text-zinc-800">Reservation Details</Heading>
              <ReservationContent reservation={reservation} />
              <Text>
                Plans changed? Please let us know by cancelling your reservation
                below
              </Text>
              <Section className="text-center">
                <Button
                  pX={20}
                  pY={12}
                  className="rounded text-red-500 border border-red-500 font-semibold no-underline text-center text-lg"
                  href={`http://localhost:3000/admin/reservations/${reservation.id}`}
                  target="_blank"
                >
                  Cancel Reservation
                </Button>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ReservationConfirmedEmail;
