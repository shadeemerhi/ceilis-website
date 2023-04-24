import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const beerCategories = await prisma.beerCategory.findMany({
      include: {
        items: true,
      },
    });

    const wineCategories = await prisma.wineCategory.findMany({
      include: {
        items: true,
      },
    });

    const spiritCategories = await prisma.spiritCategory.findMany({
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      beerCategories,
      wineCategories,
      spiritCategories,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to fetch drink items", {
      status: 500,
    });
  }
}

// async function getAndSortBeers() {
//   /**
//    * Get all beers
//    */
//   const beers = await prisma.beerItem.findMany({});

//   /**
//    * Organize tap beers
//    */
//   const tapBeers = beers.filter((beer) => beer.type === "Tap");
//   const domesticTapBeers = tapBeers.filter(
//     (beer) => beer.category === "Domestic"
//   );
//   const localTapBeers = tapBeers.filter((beer) => beer.category === "Local");
//   const importTapBeers = tapBeers.filter((beer) => beer.category === "Import");

//   /**
//    * Organize bottle beers
//    */
//   const bottleBeers = beers.filter((beer) => beer.type === "Bottle");
//   const domesticBottleBeers = bottleBeers.filter(
//     (beer) => beer.category === "Domestic"
//   );
//   const importBottleBeers = bottleBeers.filter(
//     (beer) => beer.category === "Import"
//   );

//   return {
//     tap: {
//       domestic: domesticTapBeers,
//       local: localTapBeers,
//       import: importTapBeers,
//     },
//     bottle: {
//       domestic: domesticBottleBeers,
//       import: importBottleBeers,
//     },
//   };
// }

async function getAndSortWines() {
  return {
    white: [],
    red: [],
  };
}
