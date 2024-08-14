import SectionTitle from "@/components/SectionTitle";
import Container from "../../Container";

const FeaturedProducts = () => {
  return (
    <Container className="my-10">
      <SectionTitle
        title="See our"
        highlight="featured products"
        link="/products"
      />
    </Container>
  );
};

export default FeaturedProducts;
