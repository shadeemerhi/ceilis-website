import { ReactNode } from "react";

interface IMenuSectionLayoutProps {
  children: ReactNode;
}

const MenuSectionLayout = ({ children }: IMenuSectionLayoutProps) => {
  return (
    <div className="flex flex-col gap-5 w-full md:w-5/6 my-10 px-4 md:px-0">
      {children}
    </div>
  );
};

export default MenuSectionLayout;
