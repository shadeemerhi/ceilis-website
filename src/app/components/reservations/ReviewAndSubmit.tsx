import { format } from "date-fns";
import { IReservation } from "./ReservationModal";

interface IReviewAndSubmitProps {
  reservation: IReservation;
}

const ReviewAndSubmit = ({ reservation }: IReviewAndSubmitProps) => {
  return (
    <>
      <div className="flex flex-col text-lg">
        <span className="font-bold text-white">Date</span>
        <span className="text-zinc-300">
          {format(new Date(reservation.date!), "MMM dd, yyyy")}
        </span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="font-bold text-white">Time</span>
        <span className="text-zinc-300">{reservation.time}</span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="font-bold text-white">Name</span>
        <span className="text-zinc-300">{reservation.name}</span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="font-bold text-white">Email</span>
        <span className="text-zinc-300">{reservation.email}</span>
      </div>
      <div className="flex flex-col text-lg">
        <span className="font-bold text-white">Phone</span>
        <span className="text-zinc-300">{reservation.phone}</span>
      </div>
    </>
  );
};

export default ReviewAndSubmit;
