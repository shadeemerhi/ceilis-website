import { HTMLProps } from "react";

const Input = (props: HTMLProps<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="
        px-2 
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
