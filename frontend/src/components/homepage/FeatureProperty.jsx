// src/components/homepage/FeatureProperty.jsx
import React from "react";
import { properties } from "../../data";
import PropertyCard from "../card/PropertyCard";

const FeatureProperty = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
          <p className="text-gray-500">Handpicked properties by our team.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProperty;