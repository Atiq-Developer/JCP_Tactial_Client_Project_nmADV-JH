// components/AllProduct.tsx
"use client";

import { products } from "@/app/components/productData";
import Image from "next/image";
import Link from "next/link";

export default function AllProduct() {
  return (
    <div className="p-4 sm:p-8">
      {/* Heading Centered */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Our All Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
          >
            <Link href={`/Product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="object-contain h-32 w-auto mb-3 mx-auto"
              />

              <h3 className="text-sm font-medium">{product.title}</h3>

              {/* Font size updated to 16px using Tailwind text-base */}
              <p className="text-base text-gray-600 mb-1">{product.shortDescription}</p>

              <p
                className={`font-semibold text-sm ${
                  product.soldOut ? "text-red-600" : "text-black"
                }`}
              >
                {product.soldOut ? "SOLD OUT" : product.price}
              </p>
            </Link>

            {/* Button Centered using flex */}
            <div className="mt-2 flex justify-center">
              <button
                disabled={product.soldOut}
                className={`px-4 py-1 rounded text-white text-xs font-medium ${
                  product.soldOut
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
