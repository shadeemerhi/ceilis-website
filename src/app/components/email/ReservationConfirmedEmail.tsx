import { Reservation } from "@prisma/client";
import {
  Body,
  Button,
  Container,
  Head,
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
  token: string;
}

const ReservationConfirmedEmail = ({
  reservation,
  token,
}: IReservationConfirmedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reservation Confirmed</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="rounded-lg py-8 text-center">
            <Section className="border border-solid border-[#eaeaea] rounded-md p-10">
              <Img
                src={`https://xhmmmrnmnncvntnovvox.supabase.co/storage/v1/object/public/images/static/ceilis-logo-black.png`}
                className="h-10 w-auto"
                alt="Ceilis"
              />
              <Hr className="border-[0.5px] border-solid border-zinc-200 my-4" />
              <Text className="text-2xl">
                Your reservation has been confirmed!
              </Text>
              <Container className="mb-6">
                <ReservationContent reservation={reservation} />
              </Container>
              <Text className="text-lg">
                Change of plans? Please let us know by cancelling your
                reservation below
              </Text>
              <Section className="text-center">
                <Button
                  pX={20}
                  pY={12}
                  className="rounded text-red-500 border border-solid border-[#ef4444] font-semibold no-underline text-center text-lg"
                  href={`${process.env.BASE_URL}/admin/reservations/${reservation.id}/cancel/${token}`}
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
