import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "react-toastify";

interface ICreateMenuItemInput<T> {
  url: string;
  data: T;
}

interface IUpdateMenuItemInput<T> {
  url: string;
  data: T & { id: string };
}

export type ISubmitInputItem<T> = T & { name: string; id?: string };

export interface ISubmitInput<T> {
  item: ISubmitInputItem<T>;
  url: string;
}

interface Props<T> {
  initState: T;
  closeForm: () => void;
}

const useMenuItemForm = <T extends unknown>({
  initState,
  closeForm,
}: Props<T>) => {
  const [item, setItem] = useState<T>(initState);
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;
  const router = useRouter();

  const onSubmit = async ({ item, url }: ISubmitInput<T>) => {
    if (!item.name) {
      toast.error("Please enter a name for the item");
      return;
    }

    const isUpdatingItem = !!item.id;

    if (isUpdatingItem) {
      updateMenuItem({
        url: `${url}/${item.id}`,
        data: item as IUpdateMenuItemInput<T>["data"],
      });
    } else {
      createMenuItem({ url, data: item });
    }
  };

  const createMenuItem = async ({ url, data }: ICreateMenuItemInput<T>) => {
    setIsFetching(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      startTransition(() => {
        router.refresh();
      });

      toast.success(`Successfully created item`);
      closeForm();
    } catch (error) {
      console.log(error);
      toast.error("Failed to create item");
      throw error;
    } finally {
      setIsFetching(false);
    }
  };

  const updateMenuItem = async ({ url, data }: IUpdateMenuItemInput<T>) => {
    setIsFetching(true);

    try {
      const { id, ...rest } = data;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });

      if (!response.ok) {
        throw new Error();
      }

      startTransition(() => {
        router.refresh();
      });

      toast.success(`Successfully updated item`);
      closeForm();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update item");
    } finally {
      setIsFetching(false);
    }
  };

  return {
    item,
    setItem,
    onSubmit,
    isMutating,
  };
};

export default useMenuItemForm;
