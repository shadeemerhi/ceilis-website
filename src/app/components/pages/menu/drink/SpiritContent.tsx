import { IFetchDrinkMenuResponse } from "@/app/util/types";

type ISpiritContentProps = Pick<IFetchDrinkMenuResponse, "spiritCategories">;

const SpiritContent = ({ spiritCategories }: ISpiritContentProps) => {
  return <div>lol</div>;
};

export default SpiritContent;
