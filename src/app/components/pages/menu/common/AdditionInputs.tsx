import Button from "@/app/components/design-system/Button";
import Input from "@/app/components/design-system/Input";
import { Addition } from "@prisma/client";
import { Dispatch, SetStateAction, useState } from "react";

interface IAdditionInputsProps {
  additionType: "size" | "addition";
  createAddition: (addition: Addition) => void;
  cancel: () => void;
}

const AdditionInputs = ({
  additionType,
  createAddition,
  cancel,
}: IAdditionInputsProps) => {
  const [addition, setAddition] = useState<Addition>({ name: "", price: 0 });

  const title = additionType === "size" ? "Size" : "Addition";

  const onAdditionNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setAddition((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const onAdditionPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;

    setAddition((prev) => ({
      ...prev,
      price: parseFloat(parseFloat(value).toString()),
    }));
  };

  const onAddAddition = () => {
    if (!addition.name || !addition.price) {
      return;
    }

    createAddition(addition);
    setAddition({ name: "", price: 0 });
    cancel();
  };

  return (
    <div className="mt-4">
      <span className=" font-semibold">Creat a new {additionType}</span>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor={`${additionType}Name`}>{title} name</label>
          <Input
            id="name"
            name="name"
            onChange={onAdditionNameChange}
            value={addition.name}
            type="text"
            placeholder={`${title} name`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="price">{title} price</label>
          <Input
            id="price"
            name="price"
            onChange={onAdditionPriceChange}
            value={addition.price?.toString()}
            step="0.01"
            min="0"
            placeholder="Price"
            type="number"
          />
        </div>
        <div />
        <div className="flex gap-4">
          <Button
            text="Cancel"
            textColor="black"
            variant="border"
            onClick={cancel}
          />
          <Button
            text="Add"
            textColor="white"
            variant="fill"
            onClick={onAddAddition}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionInputs;
