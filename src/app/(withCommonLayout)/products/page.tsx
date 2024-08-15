import ProductCard, { TProduct } from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/ui/Container";

const AllProducts = async () => {
  const res = await fetch(`${process.env.BASE_API}/product/`, {
    next: {
      revalidate: 30,
    },
  });
  const { data } = await res.json();
  return (
    <Container className="my-10">
      <SectionTitle
        title="Explore our"
        highlight="all products"
        link="/products"
      />
      <div className="flex  my-10">
        <div></div>
        <div className="grid grid-cols-4 gap-4">
          {data?.result?.map((product: TProduct) => (
            <ProductCard
              key={product._id}
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
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllProducts;
