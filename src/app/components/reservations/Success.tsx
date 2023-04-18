import { AiOutlineCheckCircle } from "react-icons/ai";

const Success = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center text-white">
      <span className="text-lg">We've received your request!</span>
      <span>
        One of our managers will respond back to you within 24 hours to confirm
        your booking.
      </span>
      <AiOutlineCheckCircle size={100} className="text-green-500" />
    </div>
  );
};

export default Success;
