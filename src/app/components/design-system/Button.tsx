type ButtonVariant = "default" | "border" | "fill";
type ButtonTextColor = "white" | "black";

interface IButtonProps {
  text: string;
  textColor?: ButtonTextColor;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button = ({
  text,
  textColor = "white",
  variant = "default",
  onClick,
}: IButtonProps) => {
  return (
    <button onClick={onClick} className={getButtonClasses(variant, textColor)}>
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
      baseClasses +
      " px-4 border-[1px] border-yellow-500 hover:border-yellow-800"
    );
  }

  if (variant === "fill") {
    return (
      baseClasses +
      " px-4 border-[1px] border-yellow-500 bg-zinc-800 hover:bg-zinc-700"
    );
  }

  return baseClasses;
};

export default Button;
