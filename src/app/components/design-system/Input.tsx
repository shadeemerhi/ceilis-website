import { ChangeEvent } from "react";

interface IInputProps {
  id: string;
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<any>) => void;
}

const Input = ({
  id,
  name,
  value,
  type,
  onChange,
  placeholder,
}: IInputProps) => {
  return (
    <input
      id={id}
      name={name}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder || ""}
      required
      className="
        px-3 
        py-1
        w-full 
        flex-1 
        rounded-md 
        border-[1px]
        outline-[1px]
        text-black
        placeholder:text-zinc-500"
    />
  );
};

export default Input;
