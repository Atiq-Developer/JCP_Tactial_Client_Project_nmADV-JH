import Link from "next/link";
import React from "react";

export default function ReturnPolicy() {
  return (
    <section className="min-h-screen px-6 md:px-32 py-16 bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-800">Return & Refund Policy</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-teal-700">Returns:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have <strong>30 calendar days</strong> to return an item from the date you received it.</li>
            <li>Your item must be <strong>unused</strong> and in the same condition that you received it.</li>
            <li>It must be in the <strong>original packaging</strong>.</li>
            <li>Provide a <strong>receipt or proof of purchase</strong>.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2 text-teal-700">Refunds:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>After we receive and inspect your item, we&apos;ll notify you of the status.</li>
            <li>If approved, the refund will be initiated to your original payment method.</li>
            <li>You should receive it within <strong>3–7 days</strong>, depending on your card issuer.</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <Link href="/">
            <span className="inline-block bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 transition duration-300">
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
