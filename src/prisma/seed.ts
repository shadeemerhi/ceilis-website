import prisma from "../prisma/client";
import {
  beerCategories,
  beerItems,
  foodCategories,
  foodItems,
  spiritCategories,
  spiritItems,
  wineCategories,
  wineItems,
} from "./seedData";

const insertFoodCategories = async () => {
  await prisma.foodCategory.createMany({
    data: foodCategories,
  });
};

const insertFoodItems = async () => {
  await prisma.foodItem.createMany({
    data: foodItems,
  });
};

const insertBeerCategories = async () => {
  await prisma.beerCategory.createMany({
    data: beerCategories,
  });
};

const insertBeerItems = async () => {
  await prisma.beerItem.createMany({
    data: beerItems,
  });
};

const insertWineCategories = async () => {
  await prisma.wineCategory.createMany({
    data: wineCategories,
  });
};

const insertWineItems = async () => {
  await prisma.wineItem.createMany({
    data: wineItems,
  });
};

const insertSpiritCategories = async () => {
  await prisma.spiritCategory.createMany({
    data: spiritCategories,
  });
};

const insertSpiritItems = async () => {
  await prisma.spiritItem.createMany({
    data: spiritItems,
  });
};

async function main() {
  // await insertFoodCategories();
  //   await insertFoodItems();
  //   await insertBeerCategories();
  //   await insertBeerItems();
  //   await insertWineCategories();
  //   await insertWineItems();
  //   await insertSpiritCategories();
  await insertSpiritItems();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
