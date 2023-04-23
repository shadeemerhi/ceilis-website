import { ReactElement } from "react";

interface ISectionItemsProps<T> {
  items: Array<T>;
  renderItem: (item: T) => ReactElement;
}

const SectionItems = <T extends object>({
  items,
  renderItem,
}: ISectionItemsProps<T>) => {
  return <>{items.map((item) => renderItem(item))}</>;
};

export default SectionItems;
