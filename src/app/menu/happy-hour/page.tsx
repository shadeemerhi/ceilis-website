import HappyHourSection from "@/app/components/pages/menu/happy-hour/HappyHourSection";

const HappyHourPage = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xl p-4">EVERY DAY 3-6 PM & 9 PM - CLOSE</span>
      <HappyHourSection type="DRINKS" />
      <HappyHourSection type="FOOD" />
    </div>
  );
};

export default HappyHourPage;
