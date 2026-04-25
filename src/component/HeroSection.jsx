"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import hero from "../picture/hero.jpg"

const HeroSection = () => {
  return (
    <div className="w-full">
      
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[70vh] rounded-2xl overflow-hidden"
      >
        
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <Image
              src={hero}
              alt="Hero"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Modern Furniture Collection
              </h1>
              <p className="mb-6 text-lg md:text-xl">
                Upgrade your home with stylish designs
              </p>
              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[70vh]">
            <Image
              src={hero}
              alt="Hero"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center items-start text-white px-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Elegant Living Spaces
              </h1>
              <p className="mb-6 text-lg">
                Discover comfort & luxury together
              </p>
              <button className="px-6 py-3 bg-indigo-500 rounded-full hover:bg-indigo-600 transition">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default HeroSection