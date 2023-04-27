import Button from "../design-system/Button";
import ReservationButton from "../reservations/ReservationButton";

const ActionButtons = () => {
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
