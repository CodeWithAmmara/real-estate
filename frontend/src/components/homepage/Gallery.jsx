import React from "react";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery1, gallery2]; // you can duplicate for demo

const Gallery = () => {
  return (
    <div className="p-6 bg-white max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 uppercase tracking-wide">
        Property Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-md break-inside-avoid"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
