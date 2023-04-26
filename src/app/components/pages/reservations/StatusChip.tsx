import { ReservationStatus } from "@prisma/client";

interface IStatusChipProps {
  status: ReservationStatus;
}

const StatusChip = ({ status }: IStatusChipProps) => {
  let classes = "text-xs sm:text-base px-2 py-1 border rounded-full";
  if (status === "DECLINED" || status === "CANCELLED") {
    classes += " border-red-500 text-red-500";
  }

  if (status === "PENDING") {
    classes += " border-yellow-500 text-yellow-500";
  }

  if (status === "CONFIRMED") {
    classes += " border-green-500 text-green-500";
  }

  return <div className={classes}>{status}</div>;
};

export default StatusChip;
