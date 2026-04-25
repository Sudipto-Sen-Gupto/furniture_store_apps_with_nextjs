"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Rahim Uddin",
    review: "Amazing furniture quality! My home looks stunning now.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    review: "Very modern design and fast delivery service.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Arif Hossain",
    review: "Good price and excellent customer support.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    name: "Sadia Akter",
    review: "I love the minimalist style furniture.",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 5,
    name: "Tanvir Ahmed",
    review: "Best online furniture store I have used so far.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    review: "Quality is top notch. Highly recommended!",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function Review() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-white mb-12">
        What Our Customers Say 💬
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 120,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="w-full max-w-6xl"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id} className="w-[300px]">

            {/* Glass Card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 text-white shadow-xl flex flex-col items-center text-center">

              {/* Avatar */}
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="rounded-full object-cover border-2 border-white/30"
                />
              </div>

              {/* Stars */}
              <div className="text-yellow-400 mb-2 text-sm">
                {"⭐".repeat(item.rating)}
              </div>

              {/* Review */}
              <p className="text-sm text-gray-200 mb-4">
                {item.review}
              </p>

              {/* Name */}
              <h3 className="font-semibold">{item.name}</h3>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}