import { Reservation } from "@prisma/client";
import { Container, Text } from "@react-email/components";
import { format } from "date-fns";

interface IReservationContentProps {
  reservation: Reservation;
}

const ReservationContent = ({ reservation }: IReservationContentProps) => {
  return (
    <>
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
        <Text className="text-zinc-800 m-0">{reservation.numberOfGuests}</Text>
      </Container>
      <Container className="text-lg my-4">
        <Text className="font-bold text-lg m-0 text-black">Customer Name</Text>
        <Text className="text-zinc-800 m-0">{reservation.name}</Text>
      </Container>
      <Container className="text-lg my-4">
        <Text className="font-bold text-lg m-0 text-black">Customer Email</Text>
        <Text className="text-zinc-800 m-0">{reservation.email}</Text>
      </Container>
      <Container className="text-lg my-4">
        <Text className="font-bold text-lg m-0 text-black">Customer Phone</Text>
        <Text className="text-zinc-800 m-0">{reservation.phone}</Text>
      </Container>
    </>
  );
};

export default ReservationContent;
