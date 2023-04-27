"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface IDrawerProps {
  open: boolean;
  closeDrawer: () => void;
}

const Drawer = ({ open, closeDrawer }: IDrawerProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" onClose={closeDrawer}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-200 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-0 z-50">
            <div className="fixed right-0 z-10 h-full w-3/4 bg-gray-50">
              <IoCloseOutline onClick={closeDrawer} />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
