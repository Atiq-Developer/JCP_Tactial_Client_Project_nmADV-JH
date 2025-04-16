// app/product/[slug]/page.tsx
import { products } from "@/app/components/productData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

// ✅ This enables static generation for all slugs (good for Vercel)
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = products.find((item) => item.id === params.slug);

  if (!product) return notFound();

  return (
    <div className="p-4 sm:p-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 border rounded-lg p-6 shadow-sm">
        {/* LEFT - IMAGE */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="object-contain max-h-[400px] w-auto"
          />
        </div>

        {/* RIGHT - DETAILS */}
        <div className="flex-1 flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
            <p className="text-xl font-bold mb-2">
              {product.soldOut ? (
                <span className="text-red-600">SOLD OUT</span>
              ) : (
                product.price
              )}
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Product Features</h2>
            <p className="whitespace-pre-line text-gray-700 text-base leading-relaxed">
              {product.descriptionLong}
            </p>
          </div>

          <div className="mt-4">
            <button
              disabled={product.soldOut}
              className={`w-[130px] px-4 py-2 rounded text-white text-sm font-medium ${
                product.soldOut
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
