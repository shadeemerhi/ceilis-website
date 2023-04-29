import HeroOverlay from "./HeroOverlay";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[700px] sm:h-full sm:pb-[36%] relative">
      <Image
        src="https://xhmmmrnmnncvntnovvox.supabase.co/storage/v1/object/sign/images/static/hero.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RhdGljL2hlcm8ucG5nIiwiaWF0IjoxNjgyODAxNjAzLCJleHAiOjE3MTQzMzc2MDN9.Dm_6nBFc69hptIEGa9SZU6x5OZ8Ml2_jdbYNWGcJM3A&t=2023-04-29T20%3A53%3A23.963Z"
        alt="hero"
        fill
        priority
        className="hidden sm:flex object-cover h-full w-full"
      />
      <Image
        src="https://xhmmmrnmnncvntnovvox.supabase.co/storage/v1/object/sign/images/static/hero-mobile.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvc3RhdGljL2hlcm8tbW9iaWxlLnBuZyIsImlhdCI6MTY4MjgwMTYxNSwiZXhwIjoxNzE0MzM3NjE1fQ.-B8pvrlz3CyhJ3PTVg-uK8DaZp0IxYvqgl4nvfgPvTI&t=2023-04-29T20%3A53%3A35.465Z"
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
