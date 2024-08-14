import assets from "@/assets";
import HeroItemCard from "@/components/HeroItemCard";
import Container from "../../Container";

const HeroSection = () => {
  return (
    <Container className="my-10">
      <div className="flex flex-col md:flex-row items-center">
        <div>
          <div>
            <p className="text-[16px]">Pharmacy</p>
            <h1 className="text-[34px] font-bold text-orange-500 leading-[110%] mt-4">
              The place where you can find all medications
            </h1>
            <p className="text-[14px] mt-1">
              We believe that improving both the occasional and ongoing
              engagement experience is necessary to making care dramatically
              better.
            </p>
          </div>
        </div>

        {/* hero image */}
        <div
          className="grid grid-cols-2 md:w-full 
        bg-gradient-to-b from-tangerine to-light-tangerine rounded-2xl"
        >
          <HeroItemCard
            img={assets.heros.hero1}
            name={"Metre"}
            des={"Testing equipment"}
          />
          <HeroItemCard
            img={assets.heros.hero2}
            name={"Packs"}
            des={"Healthy Packs"}
          />
          <HeroItemCard
            img={assets.heros.hero3}
            name={"Remedy"}
            des={"Health Remedy"}
          />
          <HeroItemCard
            img={assets.heros.hero4}
            name={"Medicine"}
            des={"Regular medicine"}
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
