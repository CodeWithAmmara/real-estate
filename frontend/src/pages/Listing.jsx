import SearchFilters from "../components/common/SearchFilters";
import GoogleSection from "../components/listing/GoogleSection";
import React from "react";

export default function Listing() {
  return (
  <div>
        <GoogleSection />
        

  <SearchFilters variant="listing" />
</div>

  );
}
