"use client";

import { useReservationModal } from "@/app/hooks/useReservationModal";
import { TIME_OPTIONS } from "@/app/util/constants";
import { ICreateReservationInput } from "@/app/util/types";
import React, { useState } from "react";
import Button from "../design-system/Button";
import Modal from "../design-system/Modal";
import Spinner from "../design-system/Spinner";
import ContactInformation from "./ContactInformation";
import ReservationDetails from "./ReservationDetails";
import ReviewAndSubmit from "./ReviewAndSubmit";
import Stepper from "./Stepper";
import Success from "./Success";

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

export interface IReservationFormErrors {
  date: string;
  name: string;
  email: string;
  phone: string;
}

const ReservationModal = () => {
  const { modalOpen, closeReservationModal } = useReservationModal();
  const [step, setStep] = useState(1);

  const [reservation, setReservation] = useState<ICreateReservationInput>({
    date: "",
    time: TIME_OPTIONS[0],
    numberOfGuests: "1",
    email: "",
    name: "",
    phone: "",
    status: "PENDING",
  });

  const [errors, setErrors] = useState<IReservationFormErrors>({
    date: "",
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError(false);

      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      if (!response.ok) {
        throw new Error("Failed to create reservation");
      }

      const data = await response.json();

      console.log("HERE IS DATA", data);

      setStep(4);
    } catch (error) {
      console.log("handleSubmit error", error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={modalOpen} closeModal={closeReservationModal}>
      <div className="flex flex-col items-center gap-4 w-[80vw] max-w-[460px] min-h-[440px]">
        <span className="text-3xl text-white tracking-widest">
          Reservations
        </span>
        {step < 4 && <Stepper step={step} />}

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
            {step === 4 && <Success />}
          </div>
          {submitError && (
            <span className="mt-6 text-red-500">
              Something went wrong on our end. Please try again later.
            </span>
          )}
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
                {(step === 2 || step === 3) && (
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
                {step === 4 && (
                  <Button
                    text="Close"
                    onClick={closeReservationModal}
                    variant="fill"
                  />
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
