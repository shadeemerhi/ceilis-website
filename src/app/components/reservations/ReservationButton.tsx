"use client";

import { useReservationModal } from "@/app/hooks/useReservationModal";
import Button, {
  ButtonTextColor,
  ButtonVariant,
} from "../design-system/Button";

interface IReservationButtonProps {
  text: string;
  variant: ButtonVariant;
  textColor: ButtonTextColor;
}

const ReservationButton = ({
  text,
  variant,
  textColor,
}: IReservationButtonProps) => {
  const { openReservationModal } = useReservationModal();
  return (
    <Button
      text={text}
      variant={variant}
      textColor={textColor}
      onClick={openReservationModal}
    />
  );
};

export default ReservationButton;
