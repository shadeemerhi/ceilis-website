"use client";

import { useReservationModal } from "@/app/hooks/useReservationModal";
import { GUEST_OPTIONS, TIME_OPTIONS } from "@/app/util/constants";
import React, { useState } from "react";
import Button from "../design-system/Button";
import Modal from "../design-system/Modal";
import ReservationDetails from "./ReservationDetails";
import ContactInformation from "./ContactInformation";
import ReviewAndSubmit from "./ReviewAndSubmit";
import Spinner from "../design-system/Spinner";
import Stepper from "./Stepper";

const RESERVATION_TYPES = [
  "Table Reservation",
  "Birthday",
  "Stag or Stagette",
  "Corporate",
  "Christmas Party",
  "Fundraiser",
  "Sponsorship",
  "Meetup",
  "Other",
];

export interface IReservation {
  date: string | null;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
}

export interface IReservationFormErrors {
  date: string;
  name: string;
  email: string;
  phone: string;
}

const ReservationModal = () => {
  const { modalOpen, closeReservationModal } = useReservationModal();
  const [step, setStep] = useState(1);

  const [reservation, setReservation] = useState<IReservation>({
    date: null,
    time: TIME_OPTIONS[0],
    guests: GUEST_OPTIONS[1],
    email: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState<IReservationFormErrors>({
    date: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setReservation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetailsSubmit = () => {
    /**
     * Clear any prev error state
     */

    if (!reservation.date) {
      setErrors((prev) => ({
        ...prev,
        date: "Please select a date",
      }));

      return;
    }

    const isPastDate = new Date(reservation.date) <= new Date();

    if (isPastDate) {
      setErrors((prev) => ({
        ...prev,
        date: "Please select a future date",
      }));
      return;
    }

    /**
     * Clear previous error state
     */
    setErrors((prev) => ({
      ...prev,
      date: "",
    }));

    setStep(2);
  };

  const handleContactInfoSubmit = () => {
    const errors: Omit<IReservationFormErrors, "date"> = {
      name: "",
      email: "",
      phone: "",
    };

    if (!reservation.name) {
      errors.name = "Please enter a name";
    }

    if (
      !reservation.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(reservation.email)
    ) {
      errors.email = "Please enter a valid email";
    }

    if (
      !reservation.phone ||
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
        reservation.phone
      )
    ) {
      errors.phone = "Please enter a valid phone number";
    }

    /**
     * If any error, set state
     */
    if (errors.name || errors.email || errors.phone) {
      setErrors((prev) => ({
        ...prev,
        ...errors,
      }));

      return;
    }

    /**
     * Clear previous error state
     */
    setErrors((prev) => ({
      ...prev,
      ...errors,
    }));

    setStep(3);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <Modal open={modalOpen} closeModal={closeReservationModal}>
      <div className="flex flex-col items-center gap-4 w-[80vw] max-w-[460px] min-h-[440px]">
        <span className="text-3xl text-white tracking-widest">
          Reservations
        </span>
        <Stepper step={step} />

        <div className="flex flex-col justify-between tracking-widest w-4/5 md:w-2/3 flex-1">
          <div className="flex flex-col gap-4">
            {step === 1 && (
              <ReservationDetails
                reservation={reservation}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                errors={errors}
              />
            )}
            {step === 2 && (
              <ContactInformation
                reservation={reservation}
                handleInputChange={handleInputChange}
                errors={errors}
              />
            )}
            {step === 3 && <ReviewAndSubmit reservation={reservation} />}
          </div>
          <div className="flex justify-center items-center gap-3 w-full mt-10">
            {isSubmitting ? (
              <div className="h-12">
                <Spinner color="text-amber-500" size="w-10 h-10" />
              </div>
            ) : (
              <>
                {step === 1 && (
                  <Button
                    text="Next"
                    onClick={handleDetailsSubmit}
                    variant="fill"
                  />
                )}
                {step > 1 && (
                  <Button
                    text="Back"
                    onClick={() => setStep(step - 1)}
                    variant="border"
                  />
                )}
                {step === 2 && (
                  <Button
                    text="Next"
                    onClick={handleContactInfoSubmit}
                    variant="fill"
                  />
                )}
                {step === 3 && (
                  <Button text="Submit" onClick={handleSubmit} variant="fill" />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReservationModal;
