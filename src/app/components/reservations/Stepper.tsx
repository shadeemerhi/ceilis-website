interface IStepperProps {
  step: number;
}

const Stepper = ({ step }: IStepperProps) => {
  return (
    <div className="flex justify-center gap-4 w-full text-zinc-500 whitespace-nowrap">
      <StepItem text="1. Details" selected={step === 1} />
      <StepItem text="2. Contact Info" selected={step === 2} />
      <StepItem text="3. Submit" selected={step === 3} />
    </div>
  );
};

interface IStepItemProps {
  selected: boolean;
  text: string;
}
const StepItem = ({ selected, text }: IStepItemProps) => {
  return (
    <div className={`p-2 ${selected && "text-amber-500"}`}>
      <span>{text}</span>
    </div>
  );
};

export default Stepper;
