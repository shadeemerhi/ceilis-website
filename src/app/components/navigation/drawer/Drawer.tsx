"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import DrawerContent from "./DrawerContent";

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
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-zinc-900 bg-opacity-80" />
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
          <div className="fixed inset-0 right-0 z-40">
            <DrawerContent closeDrawer={closeDrawer} />
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
