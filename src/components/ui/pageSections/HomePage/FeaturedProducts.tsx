import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard, { TProduct } from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import Container from "../../Container";

const FeaturedProducts = async () => {
  const res = await fetch(`${process.env.BASE_API}/product/`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  return (
    <Container className="my-10">
      <SectionTitle
        title="See our"
        highlight="featured products"
        link="/products"
      />

      <div className="py-10">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {data?.result?.map((product: TProduct) => (
              <CarouselItem
                key={product._id}
                className="pl-1 basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
              >
                <ProductCard
                  _id={product._id}
                  name={product.name}
                  slug={product.slug}
                  description={product.description}
                  metaKey={product.metaKey}
                  discount={product.discount}
                  stockStatus={product.stockStatus}
                  ProductDetail={product.ProductDetail}
                  category={product.category}
                  createdAt={product.createdAt}
                  updatedAt={product.updatedAt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
