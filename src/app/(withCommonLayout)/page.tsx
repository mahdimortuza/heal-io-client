import Categories from "@/components/ui/pageSections/HomePage/Categories";
import FeaturedProducts from "@/components/ui/pageSections/HomePage/FeaturedProducts";
import HeroSection from "@/components/ui/pageSections/HomePage/HeroSection";
import SubMenuSection from "@/components/ui/pageSections/HomePage/SubMenuSection";

const Home = () => {
  return (
    <>
      <SubMenuSection line={true} />
      <HeroSection />
      <Categories />
      <FeaturedProducts />
    </>
  );
};

export default Home;
