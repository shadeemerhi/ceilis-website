export const BUSINESS_NAME = "Ceili's Modern Irish Pub";
export const LIGHTSPEED_LINK = "https://ceilis.lightspeedordering.com/";
export const SKIP_THE_DISHES_LINK =
  "https://www.skipthedishes.com/ceilis-irish-pub";
export const UBER_EATS_LINK =
  "https://www.ubereats.com/ca/store/ceilis-royal-oak/iyBkEn7PQPO9iZL8UzadyA";
export const DOORDASH_LINK =
  "https://www.doordash.com/store/ceilis-royal-oak-calgary-926936/";
export const INSTAGRAM_LINK = "https://www.instagram.com/ceilisroyaloak";
export const FACEBOOK_LINK =
  "https://www.facebook.com/people/Ceilis-Royal-Oak/100063496816090";

/**
 * Reservations
 */
export const TIME_OPTIONS = [
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "1:00 pm",
  "1:30 pm",
  "2:00 pm",
  "2:30 pm",
  "3:00 pm",
  "3:30 pm",
  "4:00 pm",
  "4:30 pm",
  "5:00 pm",
  "5:30 pm",
  "6:00 pm",
  "6:30 pm",
  "7:00 pm",
  "7:30 pm",
  "8:00 pm",
  "8:30 pm",
  "9:00 pm",
  "9:30 pm",
  "10:00 pm",
];

export const GUEST_OPTIONS = [...Array(40)].map((_, i) => (i + 1).toString());

/**
 * Menu
 */
export const WINE_SIZE_OPTIONS = ["6oz", "9oz", "Bottle"];

interface IHappyHourMenu {
  DRINKS: Array<IHappyHourCategory>;
  FOOD: Array<IHappyHourCategory>;
}
interface IHappyHourCategory {
  title: string;
  description: string;
}

export const HAPPY_HOUR_MENU: IHappyHourMenu = {
  DRINKS: [
    {
      title: "$5.95",
      description: "Domestic Bottles & Well Hi-Balls",
    },
    {
      title: "$8.95",
      description: "6oz House Red & White Wine",
    },
    {
      title: "$6.95 Domestic Beers (16oz)",
      description:
        "Canadian/Rickard’s Red/ Coors/ Coors lite, Tokyo IPA/Moose Head lager/ Steam Whistle Pilsner, Stanley Park Amber/ Grasshopper",
    },
    {
      title: "$7.50 Premium (16oz)",
      description: "Harp/Keith’s/B.Moon/Winter Ale/Radler/A.Orchard",
    },
    {
      title: "$8.50",
      description: "2oz Sangria Red/White/ 2oz Bellini",
    },
  ],
  FOOD: [
    {
      title: "$6.95",
      description: "Sweet Potato or Garlic Parm Fries",
    },
    {
      title: "$9.95",
      description: "Perogies /Dry Ribs/Wings Mini Yorkies or Chili Lime Tacos",
    },
    {
      title: "$15.95",
      description: "1pc Fish & Chips",
    },
    {
      title: "$17.95",
      description: "Beef Dip/ Reuben/ Chicken Club",
    },
    {
      title: "$19.95",
      description: "2pc Fish & Chips / Steak Sandwich",
    },
  ],
};
