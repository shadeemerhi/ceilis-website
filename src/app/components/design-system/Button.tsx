import { HTMLProps } from "react";

export type ButtonVariant = "default" | "border" | "fill" | "danger";
export type ButtonTextColor = "white" | "black";

interface IButtonProps extends HTMLProps<HTMLButtonElement> {
  text: string;
  textColor?: string;
  variant?: ButtonVariant;
  type?: "button" | "submit";
  additionalClasses?: string;
}

const Button = (props: IButtonProps) => {
  const {
    variant = "default",
    textColor = "white",
    text,
    type,
    additionalClasses,
  } = props;
  return (
    <button
      {...props}
      className={`${getButtonClasses(variant, textColor)} ${
        additionalClasses && additionalClasses
      }`}
      type={type}
    >
      {text}
    </button>
  );
};

const getButtonClasses = (variant: ButtonVariant, textColor: string) => {
  const baseClasses = `w-full h-12 rounded-sm max-w-[200px] tracking-widest hover-transition disabled:bg-zinc-300 disabled:text-white disabled:border-none ${
    textColor && `text-${textColor}`
  }`;

  if (variant === "border") {
    return (
      baseClasses + " px-4 border-[1px] border-amber-500 hover:border-amber-300"
    );
  }

  if (variant === "fill") {
    return baseClasses + " px-4 bg-amber-500 hover:bg-amber-400";
  }

  if (variant === "danger") {
    return baseClasses + " px-4 border border-red-500";
  }

  return baseClasses;
};

export default Button;
