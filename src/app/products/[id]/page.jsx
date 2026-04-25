import Image from "next/image";
import { furnitureData } from "@/data";
import { Star } from "lucide-react";

export default async function Page({ params }) {
  const { id } = await params;

  const product = furnitureData.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Product not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

        {/* 🖼 Image Section */}
        <div className="relative w-full h-[400px] md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

          {/* Badge */}
          <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
            {product.necessity_sector}
          </span>
        </div>

        {/* 📋 Content Section */}
        <div className="p-6 md:p-10 space-y-5">

          {/* Name */}
          <h1 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          {/* ID */}
          <p className="text-sm text-gray-500">
            Product ID: #{product.id}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500" />
              ))}
            </div>

            <span className="text-sm text-gray-600">
              ({product.rating})
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <div className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </div>

          {/* Booking Button */}
          <button className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold hover:opacity-90 transition">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}