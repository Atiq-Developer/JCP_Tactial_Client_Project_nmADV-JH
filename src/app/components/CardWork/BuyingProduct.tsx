"use client";

import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { useCart } from "../Cart/CartContext";

export default function BuyingProduct() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price?.replace(/[^0-9.-]+/g, "") || "0");
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto p-4 md:p-8 lg:px-24 lg:py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
        {/* Products Section */}
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-bold mb-6">Your Products</h1>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center md:justify-between p-4 bg-white shadow rounded-lg"
                >
                  <div className="flex items-center gap-6">
                    <Image
                      src={item.image}
                      alt={item.title || "Product Image"}
                      width={150}
                      height={150}
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100px, 150px"
                      priority={false}
                      unoptimized={true}
                    />
                    <div>
                      <h1 className="font-semibold text-xl">{item.title}</h1>
                      <h2 className="text-base text-gray-700 mt-1">
                        {item.shortDescription || "No description"}
                      </h2>
                      <div className="text-sm text-gray-600 mt-2">
                        <p>Quantity: {item.quantity}</p>
                      </div>
                      <div className="flex gap-4 mt-4 text-gray-800">
                        <AiOutlineHeart className="text-2xl cursor-pointer hover:text-red-500" />
                        <FiTrash
                          className="text-2xl cursor-pointer hover:text-gray-500"
                          onClick={() => removeFromCart(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-xl font-semibold mt-4 md:mt-0">
                    MRP: {item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-6 bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Summary</h1>
          <div className="w-full space-y-4">
            <div className="flex justify-between text-lg">
              <span>Sub Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Delivery & Handling</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full text-lg font-semibold text-white bg-cyan-500 rounded-full py-3 mt-6 hover:bg-cyan-600 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
