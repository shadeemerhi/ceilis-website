import { HTMLProps } from "react";

interface InputProps extends HTMLProps<HTMLInputElement> {
  additionalClasses?: string;
}

const Input = ({ additionalClasses, ...rest }: InputProps) => {
  return (
    <input
      {...rest}
      className={`
        px-2 
        py-1
        w-full 
        flex-1 
        rounded-md 
        border-[1px]
        outline-[1px]
        text-black
        placeholder:text-zinc-500 
        ${additionalClasses && additionalClasses}
      `}
    />
  );
};

export default Input;
