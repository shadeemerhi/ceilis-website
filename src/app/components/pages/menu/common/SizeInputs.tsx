import { Dispatch, SetStateAction, useState } from "react";
import AdditionInputs from "./AdditionInputs";
import { Addition } from "@prisma/client";
import Button from "@/app/components/design-system/Button";
import { toast } from "react-toastify";

type IItemWithSizes<T> = T & { sizes: Array<Addition> };

interface ISizeInputsProps<T> {
  item: IItemWithSizes<T>;
  setItem: Dispatch<SetStateAction<IItemWithSizes<T>>>;
}

const SizeInputs = <T,>({ item, setItem }: ISizeInputsProps<T>) => {
  const [addingSize, setAddingSize] = useState(false);

  const createSize = (size: Addition) => {
    const existingSize = item.sizes.find((s) => s.name === size.name);

    if (existingSize) {
      toast.error("Size with that name already exists");
      return;
    }

    setItem((prev) => ({
      ...prev,
      sizes: [...prev.sizes, size],
    }));
  };

  return (
    <>
      {addingSize ? (
        <AdditionInputs
          additionType="size"
          createAddition={createSize}
          cancel={() => setAddingSize(false)}
        />
      ) : (
        <Button
          text="Add Size"
          textColor="black"
          variant="border"
          onClick={() => setAddingSize(true)}
        />
      )}
    </>
  );
};

export default SizeInputs;
