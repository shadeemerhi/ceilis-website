import { ReservationStatus } from "@prisma/client";

interface IStatusChipProps {
  status: ReservationStatus;
}

const StatusChip = ({ status }: IStatusChipProps) => {
  let classes = "px-4 py-2 border rounded-full";
  if (status === "DECLINED") {
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
