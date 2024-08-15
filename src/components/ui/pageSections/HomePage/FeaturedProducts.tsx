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

// const products = [
//   {
//     _id: "64d00f3a1a23c9b3f8a2d5b1",
//     name: "Aspirin",
//     slug: "aspirin",
//     photos: ["/uploads/aspirin-1.jpg", "/uploads/aspirin-2.jpg"],
//     description:
//       "Aspirin is a medication used to reduce pain, fever, or inflammation.",
//     metaKey: "aspirin, pain relief, fever reducer, anti-inflammatory",
//     price: 5.99,
//     discount: 0.1,
//     stockStatus: true,
//     status: "active",
//     category: "Primary",
//   },
//   {
//     _id: "64d00f4b1a23c9b3f8a2d5b2",
//     name: "Ibuprofen",
//     slug: "ibuprofen",
//     photos: ["/uploads/ibuprofen-1.jpg", "/uploads/ibuprofen-2.jpg"],
//     description:
//       "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation.",
//     metaKey: "ibuprofen, pain relief, anti-inflammatory, fever reducer",
//     price: 7.49,
//     discount: 0.15,
//     stockStatus: true,
//     status: "active",
//     category: "Primary",
//   },
//   {
//     _id: "64d00f5c1a23c9b3f8a2d5b3",
//     name: "Vitamin C",
//     slug: "vitamin-c",
//     photos: ["/uploads/vitamin-c-1.jpg", "/uploads/vitamin-c-2.jpg"],
//     description:
//       "Vitamin C is an essential vitamin that supports immune health.",
//     metaKey: "vitamin c, immune support, antioxidants, essential vitamin",
//     price: 9.99,
//     discount: 0.2,
//     stockStatus: false,
//     status: "inactive",
//     category: "Secondary",
//   },
//   {
//     _id: "64d00f6d1a23c9b3f8a2d5b4",
//     name: "Calcium",
//     slug: "calcium",
//     photos: ["/uploads/calcium-1.jpg", "/uploads/calcium-2.jpg"],
//     description:
//       "Calcium is essential for bone health and helps prevent osteoporosis.",
//     metaKey:
//       "calcium, bone health, osteoporosis prevention, essential minerals",
//     price: 8.99,
//     discount: 0.1,
//     stockStatus: true,
//     status: "active",
//     category: "Tertiary",
//   },
// ];

const FeaturedProducts = async () => {
  const res = await fetch(`${process.env.BASE_API}/product/`, {
    next: {
      revalidate: 30,
    },
  });

  const { data } = await res.json();
  console.log(data.result);
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
                  photos={product.photos}
                  description={product.description}
                  metaKey={product.metaKey}
                  price={product.price}
                  discount={product.discount}
                  stockStatus={product.stockStatus}
                  status={product.status}
                  category={product.category}
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
