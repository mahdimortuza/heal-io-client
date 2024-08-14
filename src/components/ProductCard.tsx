import Link from "next/link";

export type TProduct = {
  title: string;
  image: string;
  optImage1: string;
  price: number;
  category: string;
  description: string;
  flashSale: boolean;
  createdAt: Date;
  updatedAt: Date;
  offer: number;
  __v: number;
  quantity: number;
};

const ProductCard = () => {
  return (
    <>
      <div className="relative  flex flex-col  justify-between border-[2px] border-[#D9D9D9]   hover:border-[#008ECC] rounded-xl">
        <div className="  px-2 flex items-end justify-between">
          <Link href={"/"}>
            <div>
              <h3 className="text-xl font-[600] mt-3">$20</h3>
              <h1>brush</h1>
            </div>
          </Link>
          <button className="mb-2">Add to cart </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
