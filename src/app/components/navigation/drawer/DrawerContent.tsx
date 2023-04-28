import { IoCloseOutline } from "react-icons/io5";
import ActionButtons from "../ActionButtons";
import NavLinks from "../NavLinks";
import UserActions from "../UserActions";

interface IDrawerContentProps {
  closeDrawer: () => void;
}

const DrawerContent = ({ closeDrawer }: IDrawerContentProps) => {
  return (
    <div className="fixed right-0 z-10 h-full w-3/4 bg-zinc-800">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-end items-center h-24 px-6">
            <IoCloseOutline
              size={40}
              onClick={closeDrawer}
              className="text-white"
            />
          </div>
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="flex flex-col gap-4">
              <NavLinks closeDrawer={closeDrawer} />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <ActionButtons />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center p-6">
          <UserActions closeDrawer={closeDrawer} />
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;
