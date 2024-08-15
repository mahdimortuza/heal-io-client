import assets from "@/assets";
import Container from "@/components/ui/Container";
import Image from "next/image";

interface IProductSlug {
  params: {
    productSlug: string;
  };
}

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.BASE_API}/product`);
//   const { data: product } = await res.json();

//   return product?.slice(0, 10)?.map((product: TProduct) => ({
//     _id: product._id,
//   }));
// };
const SingleProductPage = async ({ params }: IProductSlug) => {
  const res = await fetch(
    `${process.env.BASE_API}/product${params.productSlug}`
  );
  const product = await res.json();
  const { data } = product;

  return (
    <Container className="my-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-96 w-full">
          <Image
            src={assets.categories.primary}
            alt="name"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">name</h1>
          <p className="mt-2 text-gray-600">description</p>
          <p className="mt-2 text-gray-600">Category: name</p>
          <p className="mt-2 text-gray-600">Discount: $discount</p>
          <div className="mt-4"></div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-800">$price</span>
            <button className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleProductPage;
