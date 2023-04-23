import Button from "@/app/components/design-system/Button";
import Spinner from "@/app/components/design-system/Spinner";
import { ISubmitInput, ISubmitInputItem } from "@/app/hooks/useMenuItemForm";

interface ISubmitButtonProps<T> {
  item: ISubmitInputItem<T>;
  onSubmit: (input: ISubmitInput<T>) => void;
  url: string;
  isMutating: boolean;
}

const SubmitButton = <T,>({
  item,
  onSubmit,
  url,
  isMutating,
}: ISubmitButtonProps<T>) => {
  return (
    <div className="flex justify-end mt-6">
      {isMutating ? (
        <Spinner size="w-10 h-10" color="text-amber-500" />
      ) : (
        <Button
          text="Save Item"
          textColor="white"
          variant="fill"
          onClick={() => onSubmit({ item, url })}
        />
      )}
    </div>
  );
};

export default SubmitButton;
