import React from "react";

export default function Faq() {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 mx-auto w-full max-w-screen-lg">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">
        Question Look Here
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Here are some common questions about our Accessories collection. Find the
        answers below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* FAQ Item 1 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">
            How fast do you ship your orders?
            </h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          We ship our orders same day as long as order was submitted before 11AM MST. We are in the office from 9AM to 4PM MST shipping orders and helping customers M-F. Depending on size and weight, we ship Priority and First Class via USPS, UPS and Fed EX.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">I received my order and I want to return it.</h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          We offer a 30 Day “no questions asked” return policy. Depending on why you want to return it you may be asked to ship it back to us using your own label.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">
            What condition are your products in?
            </h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
          Depending on the product and or listing our items are all either New, Open Box, or Manufactured Refurbished. If you have a specific question about conditions, please contact us directly to get condition information before purchase.
          </p>
        </div>

        {/* FAQ Item 4 */}
        <div className="bg-slate-200 p-4 rounded-lg shadow-md">
          <div className="flex justify-between mb-2">
            <h1 className="font-semibold">
              Do you offer customization for your chairs?
            </h1>
            <span className="text-xl">➕</span>
          </div>
          <p>
            Yes, we offer customization options such as fabric choice, color,
            and additional features to make sure your chair perfectly fits your
            space and preferences.
          </p>
        </div>
      </div>
    </div>
  );
}
