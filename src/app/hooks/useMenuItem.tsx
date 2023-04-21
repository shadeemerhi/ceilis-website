import { useRouter } from "next/router";
import { useState, useTransition } from "react";

interface Props<T> {
  initState: T;
}

interface ICreateMenuItemInput<T> {
  url: string;
  input: T;
}

const useMenuItem = <T extends unknown>({ initState }: Props<T>) => {
  const [item, setItem] = useState<T>(initState);

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;
  const router = useRouter();

  const createMenuItem = async ({ url, input }: ICreateMenuItemInput<T>) => {};

  const updateMenuItem = async () => {};

  const deleteMenuItem = async () => {};

  return {
    item,
    setItem,
    createMenuItem,
    updateMenuItem,
    deleteMenuItem,
  };
};

export default useMenuItem;
