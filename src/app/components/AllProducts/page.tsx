"use client";

import { products } from "@/app/components/productData";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../Cart/CartContext";

export default function AllProduct() {
  const { addToCart } = useCart();

  return (
    <div className="p-4 sm:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our All Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-3 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
          >
            <Link href={`/Product/${product.id}`}>
              <div>
                <Image
                  src={product.image}
                  alt={product.title || "Product Image"}
                  width={150}
                  height={150}
                  loading="lazy"
                  className="object-contain h-32 w-full mb-3"
                />

                <h3 className="text-sm font-medium text-center">
                  {product.title}
                </h3>
                <p className="text-xs text-gray-600 mb-1 text-center">
                  {product.shortDescription}
                </p>
                <p
                  className={`font-semibold text-sm text-center ${
                    product.soldOut ? "text-red-600" : "text-black"
                  }`}
                >
                  {product.soldOut ? "SOLD OUT" : product.price}
                </p>
              </div>
            </Link>

            <div className="flex justify-center mt-2">
              <button
                disabled={product.soldOut}
                onClick={() => {
                  if (!product.soldOut) addToCart(product);
                }}
                className={`w-[100px] px-4 py-1 rounded text-white text-xs font-medium ${
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
