import Button from "../design-system/Button";
import ActionButtons from "./ActionButtons";

const MobileBottomNav = () => {
  return (
    <div className="flex justify-center gap-8 md:hidden w-full fixed bottom-0 p-6 bg-zinc-800 mt-20">
      <ActionButtons />
    </div>
  );
};

export default MobileBottomNav;
