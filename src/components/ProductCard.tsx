import Link from "next/link";

export type TProduct = {
  _id: string;
  name: string;
  slug: string;
  photos: string[];
  description: string;
  metaKey: string;
  price: number;
  discount: number;
  stockStatus: boolean;
  status: string;
  category: string;
};

const ProductCard = ({
  _id,
  name,
  slug,
  photos,
  description,
  metaKey,
  price,
  discount,
  stockStatus,
  status,
  category,
}: TProduct) => {
  return (
    <>
      <div className="relative  flex flex-col  justify-between border-[2px] border-[#D9D9D9]   hover:border-orange-500 rounded-xl">
        <div className="  px-2 flex items-end justify-between">
          <Link href={"/"}>
            <div>
              <h3 className="text-xl font-[600] mt-3">${price}</h3>
              <h1>{name}</h1>
            </div>
          </Link>
          <h1>{discount}</h1>
          <button className="mb-2">Add to cart </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
