import { ICreateReservationInput } from "@/app/util/types";
import Input from "../design-system/Input";
import { IReservationFormErrors } from "./ReservationModal";

interface IContactInformationProps {
  reservation: ICreateReservationInput;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: IReservationFormErrors;
}

const ContactInformation = ({
  reservation,
  handleInputChange,
  errors,
}: IContactInformationProps) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <Input
          id="name"
          type="name"
          name="name"
          onChange={handleInputChange}
          placeholder="Name"
          value={reservation.name}
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-white">
          Email
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          onChange={handleInputChange}
          placeholder="Email"
          value={reservation.email}
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-white">
          Phone
        </label>
        <Input
          id="phone"
          type="phone"
          name="phone"
          onChange={handleInputChange}
          placeholder="Phone"
          value={reservation.phone}
        />
        {errors.phone && <span className="text-red-500">{errors.phone}</span>}
      </div>
    </>
  );
};

export default ContactInformation;
