import Button from "@/app/components/design-system/Button";
import { useCurrentUser } from "@/app/hooks/useCurrentUser";
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
  const { userIsManager } = useCurrentUser();

  if (!userIsManager) {
    return null;
  }

  return (
    <div className="hidden sm:flex w-44">
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
    </div>
  );
};

export default HeaderButtons;
