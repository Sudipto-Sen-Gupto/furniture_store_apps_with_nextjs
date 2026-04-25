"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Star } from "lucide-react";

import UseAuthContext from "@/component/useAuthContext/UseAuthContext";
import { furnitureData } from "@/data";

export default function Page({ params }) {
  const router = useRouter();
  const { user, loader } = UseAuthContext();

  const [product, setProduct] = useState(null);

  // 🔥 async function inside useEffect
  useEffect(() => {
    const loadProduct = async () => {
      const { id } = await params;

      const foundProduct = furnitureData.find(
        (item) => item.id === Number(id)
      );

      setProduct(foundProduct);
    };

    loadProduct();
  }, [params]);

  // 🔐 Private route check
  useEffect(() => {
    if (!loader && !user) {
      router.push("/login");
    }
  }, [user, loader, router]);

  // ⏳ loading state
  if (loader || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden grid md:grid-cols-2">

        {/* Image */}
        <div className="relative w-full h-[400px] md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 space-y-5">

          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-500">{product.necessity_sector}</p>

          <p className="text-gray-600">{product.description}</p>

          {/* Rating */}
          <div className="flex text-yellow-500">
            {Array.from({ length: Math.round(product.rating) }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500" />
            ))}
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
            Book Now
          </button>

        </div>

      </div>
    </div>
  );
}