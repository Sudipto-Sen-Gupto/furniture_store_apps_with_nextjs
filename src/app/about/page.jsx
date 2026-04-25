import Image from "next/image";

import pic1 from "../../picture/pic1.avif";
import pic2 from "../../picture/pic2.avif";
import pic3 from "../../picture/pic3.avif";
import pic4 from "../../picture/pic4.avif";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">

      {/* 🌟 HERO */}
      <div className="relative h-[450px] w-full overflow-hidden">

        <Image
          src={pic1}
          alt="furniture hero"
          fill
          className="object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Craft Your Dream Home
          </h1>

          <p className="mt-4 text-gray-300 max-w-2xl">
            Premium furniture designed for comfort, elegance, and modern living.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
            Explore Collection
          </button>

        </div>
      </div>

      {/* 🧠 STORY SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          We Don’t Just Sell Furniture — We Design Lifestyle
        </h2>

        <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Our mission is to bring world-class furniture that blends beauty,
          comfort, and durability. Every piece is carefully crafted to
          transform your living space into something extraordinary.
        </p>

      </div>

      {/* ✨ FEATURE CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Luxury Quality",
            desc: "Premium materials with long-lasting durability."
          },
          {
            title: "Modern Design",
            desc: "Minimal, stylish furniture for modern homes."
          },
          {
            title: "Fast Delivery",
            desc: "Safe & quick delivery to your doorstep."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}

      </div>

      {/* 🪑 IMAGE SHOWCASE */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Designed for Modern Living
          </h2>

          <p className="text-gray-400">
            From elegant sofas to luxury dining sets — every product is
            crafted to match your lifestyle and elevate your home.
          </p>

          <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">

          <Image src={pic2} alt="" className="rounded-xl" />
          <Image src={pic3} alt="" className="rounded-xl" />
          <Image src={pic4} alt="" className="rounded-xl col-span-2" />

        </div>

      </div>

      {/* 💎 FINAL CTA */}
      <div className="text-center py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">

        <h2 className="text-3xl md:text-4xl font-bold">
          Build a Home You Love 🏡
        </h2>

        <p className="mt-2 text-white/80">
          Premium furniture for premium lifestyles
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition">
          Start Shopping
        </button>

      </div>

    </div>
  );
}