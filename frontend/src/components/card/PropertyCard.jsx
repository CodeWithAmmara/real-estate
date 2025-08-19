import React from "react";
import { Heart, Repeat2, MapPin } from "lucide-react";
const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
        

        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded">Featured</span>
          )}
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">{property.status}</span>
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-3 text-white text-lg font-bold drop-shadow-lg">
          ${property.price}
          <span className="text-sm font-medium">/mo</span>
        </div>

        {/* Actions */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50">
            <Repeat2 size={16} />
          </button>
          <button className="bg-black bg-opacity-30 p-2 rounded-full text-white hover:bg-opacity-50">
            <Heart size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-sm text-pink-500 font-medium">{property.type}</p>
        <h3 className="font-semibold text-gray-800 text-lg">{property.title}</h3>
        <p className="text-sm text-gray-600 flex items-center mt-1">
          <MapPin size={14} className="mr-1" />
          {property.address}
        </p>
        <div className="flex text-sm text-gray-700 mt-2 space-x-4">
          <span>Beds: {property.beds}</span>
          <span>Baths: {property.baths}</span>
          <span>SqFt: {property.sqft}</span>
        </div>
      </div>

      {/* Agent Footer */}
      <div className="px-4 py-3 border-t flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <img
            src={property.agent.avatar}
            alt={property.agent.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{property.agent.name}</span>
        </div>
        <span>{property.posted}</span>
      </div>
    </div>
  );
};

export default PropertyCard;
