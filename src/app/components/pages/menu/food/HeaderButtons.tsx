import Button from "@/app/components/design-system/Button";
import { Dispatch, SetStateAction } from "react";

interface IHeaderButtonsProps<T> {
  selectedItem: T | null;
  setSelectedItem: Dispatch<SetStateAction<T | null>>;
  categoryId: string;
  itemTemplate: T;
}

const HeaderButtons = <T extends object>({
  selectedItem,
  setSelectedItem,
  categoryId,
  itemTemplate,
}: IHeaderButtonsProps<T>) => {
  return (
    <>
      {selectedItem ? (
        <Button
          text="Cancel"
          textColor="black"
          variant="border"
          onClick={() => setSelectedItem(null)}
        />
      ) : (
        <Button
          text="Add Item"
          textColor="white"
          variant="fill"
          onClick={() =>
            setSelectedItem({
              ...itemTemplate,
              categoryId,
            })
          }
        />
      )}
    </>
  );
};

export default HeaderButtons;
