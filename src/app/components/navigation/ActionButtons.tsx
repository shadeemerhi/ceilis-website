import Button from "../design-system/Button";
import ReservationButton from "../reservations/ReservationButton";

interface IActionButtonsProps {
  flexDir?: string;
}

const ActionButtons = ({ flexDir }: IActionButtonsProps) => {
  return (
    <>
      <ReservationButton
        text="Reservations"
        variant="border"
        textColor="white"
      />
      <Button text="Order Now" variant="border" />
    </>
  );
};

export default ActionButtons;
