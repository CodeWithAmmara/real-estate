import React, { useState } from "react";

const SearchFilters = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [filters, setFilters] = useState({
    keyword: "",
    type: "",
    location: "",
    price: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Searching with:", { ...filters, purpose: activeTab });
  };

  return (
    <div className="absolute z-10 w-full bottom-[-5%] lg:bottom-[1%] ">
      {/* Search Bar Box */}
      <div className="w-full max-w-7xl mx-auto mt-6 md:mt-0 px-4 sm:px-6 lg:px-8 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:bottom-[-40px] bg-white shadow-lg rounded-md py-6">
        {/* Tabs */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-5 py-2 border-r font-semibold ${
              activeTab === "buy"
                ? "text-white bg-lime-600"
                : "text-gray-600 bg-gray-100"
            }`}
            onClick={() => setActiveTab("buy")}
          >
            Buy Properties
          </button>
          <button
            className={`px-5 py-2 font-semibold ${
              activeTab === "rent"
                ? "text-white bg-lime-600"
                : "text-gray-600 bg-gray-100"
            }`}
            onClick={() => setActiveTab("rent")}
          >
            Rent Properties
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end">
          {/* Keyword */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Enter Keyword
            </label>
            <input
              type="text"
              name="keyword"
              value={filters.keyword}
              onChange={handleChange}
              placeholder="e.g. villa"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Property Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Property Type
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="land">Land</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={filters.location}
              onChange={handleChange}
              placeholder="Search Location"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Price Limit */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Price Limit
            </label>
            <select
              name="price"
              value={filters.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 text-sm"
            >
              <option value="">Select</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
              <option value="500000">$500,000</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="mt-1">
            <button
              onClick={handleSearch}
              className="w-full bg-lime-600 text-white px-4 py-2 rounded font-semibold hover:bg-lime-700 transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
