import {
  BeerCategory,
  BeerItem,
  FoodCategory,
  FoodItem,
  Reservation,
  SpiritCategory,
  SpiritItem,
  WineCategory,
  WineItem,
} from "@prisma/client";

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type ICreateReservationInput = Omit<
  Reservation,
  "id" | "createdAt" | "updatedAt"
>;

export type IUpdateReservationInput = Pick<Reservation, "id"> &
  Partial<Reservation>;

export interface IFoodCategoryPopulated extends FoodCategory {
  items: Array<FoodItem>;
}

export interface IWineCategoryPopulated extends WineCategory {
  items: Array<WineItem>;
}

export interface ISpiritCategoryPopulated extends SpiritCategory {
  items: Array<SpiritItem>;
}

export interface IBeerCategoryPopulated extends BeerCategory {
  items: Array<BeerItem>;
}

export interface IFetchFoodMenuResponse {
  categories: Array<IFoodCategoryPopulated>;
}

export type ICreateItemInput<T extends { id: string }> = Omit<T, "id"> & {
  id?: string;
};

export type ISelectedItem<T extends { id: string }> =
  | (Omit<T, "id"> & { id?: string })
  | null;

export interface IFetchDrinkMenuResponse {
  beerCategories: Array<IBeerCategoryPopulated>;
  wineCategories: Array<IWineCategoryPopulated>;
  spiritCategories: Array<ISpiritCategoryPopulated>;
}
