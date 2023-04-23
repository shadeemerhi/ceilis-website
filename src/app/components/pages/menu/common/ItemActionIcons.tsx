"use client";

import Button from "@/app/components/design-system/Button";
import Modal from "@/app/components/design-system/Modal";
import Spinner from "@/app/components/design-system/Spinner";
import { useModal } from "@/app/hooks/useModal";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { toast } from "react-toastify";

interface IItemActionProps {
  itemName: string;
  apiDeleteUrl: string;
  onEdit: () => void;
}

const ItemActionIcons = ({
  itemName,
  apiDeleteUrl,
  onEdit,
}: IItemActionProps) => {
  const { modalOpen, openModal, closeModal } = useModal();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isPending || isFetching;
  const router = useRouter();

  const onDeleteItem = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(apiDeleteUrl, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error();
      }

      startTransition(() => {
        router.refresh();
      });

      toast.success("Successfully deleted item");
      closeModal();
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete item");
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <>
      <Modal open={modalOpen} closeModal={closeModal}>
        <div className="flex flex-col gap-6 text-white">
          <span className="text-lg">
            Are you sure you want to delete {itemName}?
          </span>
          <div className="flex justify-center gap-4">
            {isMutating ? (
              <Spinner size="w-12 h-12" color="text-amber-500" />
            ) : (
              <>
                <Button text="Cancel" variant="border" onClick={closeModal} />
                <Button text="Delete" variant="fill" onClick={onDeleteItem} />
              </>
            )}
          </div>
        </div>
      </Modal>
      <div className="flex gap-2 mt-2">
        <AiOutlineEdit size={20} className="cursor-pointer" onClick={onEdit} />
        <AiOutlineDelete
          size={20}
          className="cursor-pointer"
          onClick={openModal}
        />
      </div>
    </>
  );
};

export default ItemActionIcons;
