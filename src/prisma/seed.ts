import prisma from "../prisma/client";
import {
  beerCategories,
  foodCategories,
  spiritCategories,
  wineCategories,
} from "./seedData";

const insertFoodCategories = async () => {
  await prisma.foodCategory.createMany({
    data: foodCategories,
  });
};

const insertBeerCategories = async () => {
  await prisma.beerCategory.createMany({
    data: beerCategories,
  });
};

const insertWineCategories = async () => {
  await prisma.wineCategory.createMany({
    data: wineCategories,
  });
};

const insertSpiritCategories = async () => {
  await prisma.spiritCategory.createMany({
    data: spiritCategories,
  });
};

async function main() {
  await insertFoodCategories();
  await insertBeerCategories();
  await insertWineCategories();
  await insertSpiritCategories();
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
