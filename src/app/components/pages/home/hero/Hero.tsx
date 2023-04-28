import HeroOverlay from "./HeroOverlay";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[700px] sm:h-full sm:pb-[36%] relative">
      <Image
        src="/hero.png"
        alt="hero"
        fill
        priority
        className="hidden sm:flex object-cover h-full w-full"
      />
      <Image
        src="/hero-mobile.jpg"
        alt="hero-mobile"
        fill
        priority
        className="sm:hidden object-cover h-full w-full"
      />
      <HeroOverlay />
    </div>
  );
};

export default Hero;
