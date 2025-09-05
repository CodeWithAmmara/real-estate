// src/components/homepage/FeatureProperty.jsx
import React from "react";
import { properties } from "../../data";
import PropertyCard from "../card/PropertyCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeatureProperty = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
            <h6 className="  text-sm font-semibold text-blue-600 tracking-widest">FEATURED PROPERTIES</h6>
          <h2 className="text-3xl font-bold text-gray-800">Recommended For You</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
         {/* View All Button */}
       <div className="text-center">
     <Link
      to="/properties"
      className="inline-flex items-center gap-2 px-6 py-3 mt-15 text-white bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition"
     >
     View All Properties 
    <ArrowRight className="w-5 h-5" />
    </Link>
    </div>
      </div>
    </section>
  );
};

export default FeatureProperty;