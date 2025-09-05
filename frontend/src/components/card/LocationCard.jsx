import React from "react";
import { ArrowRight } from "lucide-react";

const LocationCard = ({ city, properties, image }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition relative w-full cursor-pointer group">
      {/* Image with smooth zoom */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={city}
          className="w-full h-[375px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 flex justify-between items-center transition duration-300 group-hover:bg-white">
        <div>
          <p className="text-sm text-gray-500">{properties} Property</p>
          <h3 className="text-lg font-semibold">{city}</h3>
        </div>
        <button className="bg-gray-200 p-2 rounded-full transition group-hover:bg-blue-500 group-hover:text-white">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default LocationCard;
