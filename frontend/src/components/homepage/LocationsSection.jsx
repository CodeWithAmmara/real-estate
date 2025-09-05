import React from "react";
import { locations } from "../../data.js";
import LocationCard from "../card/LocationCard";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const LocationsSection = () => {
  return (
    <section className="py-10 px-6 text-center">
      <p className="text-sm font-semibold text-blue-600 tracking-widest">
        EXPLORE CITIES
      </p>
      <h2 className="text-3xl font-bold mb-6">Our Location For You</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
      >
        {locations.map((loc) => (
          <SwiperSlide key={loc.id}>
            <LocationCard
              city={loc.city}
              properties={loc.properties}
              image={loc.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots Container */}
      <div className="custom-pagination flex justify-center mt-6 space-x-2"></div>
    </section>
  );
};

export default LocationsSection;
