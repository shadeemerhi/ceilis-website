import Button from "@/app/components/design-system/Button";
import { Addition } from "@prisma/client";
import { useState } from "react";
import AdditionInputs from "../AdditionInputs";
import { IItemSizesProps } from "./ItemSizes";

interface ISizeInputProps {
  createSize: (size: Addition) => void;
  sizeNameList?: Array<string>;
}

const SizeInputs = ({ createSize, sizeNameList }: ISizeInputProps) => {
  const [addingSize, setAddingSize] = useState(false);

  return (
    <>
      {addingSize ? (
        <AdditionInputs
          additionType="size"
          createAddition={createSize}
          sizeNameList={sizeNameList}
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
