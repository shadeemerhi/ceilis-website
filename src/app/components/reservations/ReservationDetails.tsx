import { GUEST_OPTIONS, TIME_OPTIONS } from "@/app/util/constants";
import { ICreateReservationInput } from "@/app/util/types";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
import Input from "../design-system/Input";
import { IReservationFormErrors } from "./ReservationModal";

interface IReservationDetailsProps {
  reservation: ICreateReservationInput;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  errors: IReservationFormErrors;
}

const ReservationDetails = ({
  reservation,
  handleInputChange,
  handleSelectChange,
  errors,
}: IReservationDetailsProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="date" className="text-white">
          Date
        </label>
        <Input
          id="date"
          name="date"
          type="date"
          placeholder="yyyy-mm-dd"
          onChange={handleInputChange}
          value={reservation.date || "yyyy-mm-dd"}
          additionalClasses="min-w-[254px]"
        />
        {errors.date && <span className="text-red-500">{errors.date}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="date" className="text-white">
          Time
        </label>
        <Listbox
          value={reservation.time}
          onChange={(value) => handleSelectChange("time", value)}
        >
          <div className="relative mt-1 z-10">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              <span className="block truncate">{reservation.time}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown size={24} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute -top-10 overflow-scroll h-[200px] mt-1  w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {TIME_OPTIONS.map((time, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={time}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {time}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <AiOutlineCheck />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="date" className="text-white">
          Number of Guests
        </label>
        <Listbox
          value={reservation.numberOfGuests}
          onChange={(value) =>
            handleSelectChange("numberOfGuests", value.toString())
          }
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
              <span className="block truncate">
                {reservation.numberOfGuests}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown size={24} />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute -top-10 overflow-scroll h-[200px] mt-1  w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {GUEST_OPTIONS.map((number, numberIdx) => (
                  <Listbox.Option
                    key={numberIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={number}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {number}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <AiOutlineCheck />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
};

export default ReservationDetails;
