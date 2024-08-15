"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

type Variant = {
  _id: string;
  variant: string;
};

type ProductDetail = {
  photo: string;
  variant: Variant;
  price: string;
  _id: string;
};

type Category = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  isDeleted: boolean;
  __v: number;
};

export type TProduct = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  metaKey: string;
  discount: number;
  stockStatus: boolean;
  ProductDetail: ProductDetail[];
  category: Category;
  createdAt: string;
  updatedAt: string;
};

const ProductCard = (product: TProduct) => {
  const { slug, name, ProductDetail } = product;

  const [selectedVariant, setSelectedVariant] = useState<ProductDetail>(
    ProductDetail[0]
  );

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const variant = ProductDetail.find((item) => item._id === selectedId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-[300px]">
      <Link href={`/products/${slug}`}>
        <div className="relative h-64 w-full">
          <Image
            src={selectedVariant.photo}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transform transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-gray-600">Discount: ${product.discount}</p>
        <div className="flex flex-col items-start mt-4 space-y-4">
          <select
            onChange={handleVariantChange}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            {ProductDetail.map((item) => (
              <option key={item._id} value={item._id}>
                {item.variant.variant} - ${item.price}
              </option>
            ))}
          </select>
          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-bold text-gray-800">
              ${selectedVariant.price}
            </span>
            <Button className="px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
