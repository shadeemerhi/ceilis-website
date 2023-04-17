export type ButtonVariant = "default" | "border" | "fill";
export type ButtonTextColor = "white" | "black";

interface IButtonProps {
  text: string;
  textColor?: ButtonTextColor;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: "button" | "submit";
}

const Button = ({
  text,
  textColor = "white",
  variant = "default",
  onClick,
  type = "button",
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={getButtonClasses(variant, textColor)}
      type={type}
    >
      {text}
    </button>
  );
};

const getButtonClasses = (
  variant: ButtonVariant,
  textColor: ButtonTextColor
) => {
  const baseClasses = `w-full h-12 rounded-sm max-w-[200px] tracking-widest hover-transition ${
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

  return baseClasses;
};

export default Button;
