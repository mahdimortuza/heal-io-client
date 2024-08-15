import Image from "next/image";
import React, { useState } from "react";
import { TProduct } from "./ProductCard";

const SingleProductPageDescription = (data: TProduct) => {
  const { discount, category, description, name, ProductDetail } = data;

  const [selectedVariant, setSelectedVariant] = useState(ProductDetail[0]);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const variant = ProductDetail.find((item: any) => item._id === selectedId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };
  return (
    <>
      <div className="relative h-96 w-full">
        <Image
          src={selectedVariant.photo}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-gray-600">Category: {category.name}</p>
        <p className="mt-2 text-gray-600">Discount: ${discount}</p>
        <div className="mt-4">
          <select
            onChange={handleVariantChange}
            className="block w-full p-2 border border-gray-300 rounded"
          >
            {ProductDetail.map((item: any) => (
              <option key={item._id} value={item._id}>
                {item.variant.variant} - ${item.price}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">
            ${selectedVariant.price}
          </span>
          <button className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProductPageDescription;
