import React from "react";
import { testimonials } from "../../data.js";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="text-blue-600 font-semibold uppercase tracking-wider">
          Our Testimonials
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What People Say’s
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Our seasoned team excels in real estate with years of successful
          market navigation, offering informed decisions and optimal results.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-12">
     <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={12}
    slidesPerView="auto"   // 👈 important
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true, el: ".testimonial-pagination" }}
    >
    {testimonials.map((item) => (
    <SwiperSlide key={item.id} className="!w-[320px]"> {/* 👈 width goes here */}
      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col h-[300px]">
        <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
        <p className="text-gray-600 flex-grow line-clamp-4">"{item.text}"</p>

        <div className="flex items-center mt-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-3 text-left">
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.role}</p>
            <div className="flex text-yellow-500 mt-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </SwiperSlide>
      ))}
     </Swiper>
        {/* Pagination Dots Container */}
        <div className="testimonial-pagination flex justify-center mt-6 space-x-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;
