"use client";

import { useCart } from "./CartContext";

export default function CartSidebar() {
  const { cartItems, removeFromCart } = useCart();

  // 🧮 Calculate total from cartItems
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg border-l z-50 p-4 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <p className="font-semibold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}
