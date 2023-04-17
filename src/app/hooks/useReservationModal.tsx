import { createContext, ReactNode, useContext } from "react";
import { useModal } from "../hooks/useModal";

interface IReservationModalContext {
  modalOpen: boolean;
  openReservationModal: () => void;
  closeReservationModal: () => void;
}

export const ReservationModalContext = createContext<IReservationModalContext>({
  modalOpen: false,
  openReservationModal: () => {},
  closeReservationModal: () => {},
});

export const useReservationModal = () => {
  return useContext(ReservationModalContext);
};

interface ReservationModalProps {
  children: ReactNode;
}

const ReservationModal = ({ children }: ReservationModalProps) => {
  const {
    modalOpen,
    openModal: openReservationModal,
    closeModal: closeReservationModal,
  } = useModal();

  const value = {
    modalOpen,
    openReservationModal,
    closeReservationModal,
  };

  return (
    <ReservationModalContext.Provider value={value}>
      {children}
    </ReservationModalContext.Provider>
  );
};

export default ReservationModal;
