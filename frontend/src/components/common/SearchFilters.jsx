import React, { useEffect, useRef, useState } from "react";

const SearchFilters = ({ variant = "homepage" }) => {
  const [activeTab, setActiveTab] = useState("rent");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const barRef = useRef(null);
  const panelRef = useRef(null);
  const [panelStyle, setPanelStyle] = useState({ top: 0, left: 0, width: 0 });

  const [filters, setFilters] = useState({
    keyword: "",
    type: "",
    location: "",
    priceRange: [100, 650000],
    sizeRange: [500, 1500],
    rooms: "2",
    bathrooms: "2",
    bedrooms: "2",
    amenities: [],
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Searching with:", { ...filters, purpose: activeTab });
  };

  const positionPanel = () => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const margin = 16;
    const width = Math.min(rect.width, vw - margin * 2);
    let left = Math.min(Math.max(rect.left, margin), vw - margin - width);
    const top = rect.bottom + 8;
    setPanelStyle({ top, left, width });
  };

  useEffect(() => {
    if (!showAdvanced) return;
    positionPanel();
    const onScroll = () => positionPanel();
    const onResize = () => positionPanel();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const onDocClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        barRef.current &&
        !barRef.current.contains(e.target)
      ) {
        setShowAdvanced(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [showAdvanced]);

  return (
    <div
      className={`relative w-full mx-auto ${
        variant === "homepage" ? "max-w-6xl px-4 sm:px-6" : "border-b pb-3"
      }`}
    >
      {/* Tabs - Homepage top style */}
      {variant === "homepage" && (
        <div className="flex justify-center mb-4">
          <div className="inline-flex rounded-full bg-white p-1 shadow-md border">
            {["rent", "buy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab === "rent" ? "For Rent" : "For Sale"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Search Bar */}
      <div
        ref={barRef}
        className={`flex items-center bg-white w-full ${
          variant === "homepage"
            ? "flex-row rounded-full shadow-lg px-6 py-3 gap-3 border border-gray-200"
            : "flex-row rounded-full shadow-md px-4 py-2 gap-2 border border-gray-200"
        }`}
      >
        {/* Tabs inline for listing */}
        {variant === "listing" && (
          <div className="flex-shrink-0 inline-flex rounded-full overflow-hidden border border-gray-300">
            {["rent", "buy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab === "rent" ? "For Rent" : "For Sale"}
              </button>
            ))}
          </div>
        )}

        {/* Keyword */}
        <input
          type="text"
          name="keyword"
          value={filters.keyword}
          onChange={handleChange}
          placeholder="Search Keyword"
          className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-full border border-gray-200"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Search Location"
          className="flex-1 px-4 py-2 text-sm text-gray-700 placeholder-gray-400 outline-none rounded-full border border-gray-200"
        />

        {/* Type */}
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="px-4 py-2 text-sm text-gray-700 outline-none border border-gray-200 rounded-full"
        >
          <option value="">All</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="house">House</option>
          <option value="studio">Studio</option>
        </select>

        {/* Advanced Button */}
        <button
          onClick={() => setShowAdvanced((s) => !s)}
          className="border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 rounded-full hover:bg-gray-50"
        >
          Search advanced
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 text-sm font-medium rounded-full hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Advanced Panel */}
      {showAdvanced && (
        <div
          ref={panelRef}
          style={{
            position: "fixed",
            top: panelStyle.top,
            left: panelStyle.left,
            width: panelStyle.width,
          }}
          className="bg-white text-black shadow-2xl rounded-2xl p-6 z-[60] max-h-[70vh] overflow-auto"
        >
          {/* Price + Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="font-semibold text-sm">
                Price: ${filters.priceRange[0].toLocaleString()} - $
                {filters.priceRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="100"
                max="650000"
                value={filters.priceRange[1]}
                onChange={(e) =>
                  setFilters({ ...filters, priceRange: [100, +e.target.value] })
                }
                className="w-full mt-2"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">
                Size: {filters.sizeRange[0]} SqFt - {filters.sizeRange[1]} SqFt
              </label>
              <input
                type="range"
                min="500"
                max="1500"
                value={filters.sizeRange[1]}
                onChange={(e) =>
                  setFilters({ ...filters, sizeRange: [500, +e.target.value] })
                }
                className="w-full mt-2"
              />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <select
              name="rooms"
              value={filters.rooms}
              onChange={handleChange}
              className="border rounded-full px-4 py-2"
            >
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
            <select
              name="bathrooms"
              value={filters.bathrooms}
              onChange={handleChange}
              className="border rounded-full px-4 py-2"
            >
              <option value="1">1 Bathroom</option>
              <option value="2">2 Bathrooms</option>
              <option value="3">3 Bathrooms</option>
              <option value="4">4+ Bathrooms</option>
            </select>
            <select
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="border rounded-full px-4 py-2"
            >
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="border rounded-full px-4 py-2"
            >
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="font-semibold text-sm block mb-2">Amenities:</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {[
                "Air Condition","Elevator","Garage","Swimming Pool","WiFi","Security",
                "Cable TV","Ceiling Height","Fireplace","Disabled Access","Fence","Furnishing",
                "Floor","Garden","Pet Friendly","Heating","Intercom","Parking","Renovation",
                "Window Type","Search property","Construction Year",
              ].map((amenity) => (
                <label key={amenity} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={filters.amenities.includes(amenity)}
                    onChange={(e) => {
                      const { value, checked } = e.target;
                      setFilters((prev) => ({
                        ...prev,
                        amenities: checked
                          ? [...prev.amenities, value]
                          : prev.amenities.filter((a) => a !== value),
                      }));
                    }}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
