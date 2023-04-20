import { ReactNode } from "react";

interface IMenuSectionProps {
  children: ReactNode;
}

const MenuSection = ({ children }: IMenuSectionProps) => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-5/6 my-10 px-4 md:px-0">
      {children}
    </div>
  );
};

export default MenuSection;
