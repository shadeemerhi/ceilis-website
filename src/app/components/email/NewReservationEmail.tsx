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
import { format } from "date-fns";
import * as React from "react";

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
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">Date</Text>
                <Text className="text-zinc-800 m-0">
                  {format(new Date(reservation.date!), "MMM dd, yyyy")}
                </Text>
              </Container>
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">Time</Text>
                <Text className="text-zinc-800 m-0">{reservation.time}</Text>
              </Container>
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">
                  Number of Guests
                </Text>
                <Text className="text-zinc-800 m-0">
                  {reservation.numberOfGuests}
                </Text>
              </Container>
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">
                  Customer Name
                </Text>
                <Text className="text-zinc-800 m-0">{reservation.name}</Text>
              </Container>
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">
                  Customer Email
                </Text>
                <Text className="text-zinc-800 m-0">{reservation.email}</Text>
              </Container>
              <Container className="text-lg my-4">
                <Text className="font-bold text-lg m-0 text-black">
                  Customer Phone
                </Text>
                <Text className="text-zinc-800 m-0">{reservation.phone}</Text>
              </Container>
              <Section className="text-center">
                <Button
                  pX={20}
                  pY={12}
                  className="bg-amber-500 rounded text-white font-semibold no-underline text-center text-lg"
                  href={`http://localhost:3000/admin/reservations/${reservation.id}`}
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
