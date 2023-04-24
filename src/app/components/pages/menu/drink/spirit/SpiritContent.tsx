import { IFetchDrinkMenuResponse } from "@/app/util/types";
import MenuSectionLayout from "../../common/MenuSectionLayout";
import SpiritSection from "./SpiritSection";

type ISpiritContentProps = Pick<IFetchDrinkMenuResponse, "spiritCategories">;

const SpiritContent = ({ spiritCategories }: ISpiritContentProps) => {
  return (
    <MenuSectionLayout>
      <span className="text-3xl text-amber-600 tracking-widest">SPIRITS</span>
      {spiritCategories.map((category) => (
        <SpiritSection key={category.id} category={category} />
      ))}
    </MenuSectionLayout>
  );
};

export default SpiritContent;
