import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import SearchFilters from '../components/homepage/SearchFilters'
import FeatureProperty from '../components/homepage/FeatureProperty'
import Gallery from '../components/homepage/Gallery'
function Home() {
  return (

    // here we attach the Home component to the Layout
     <div>
      <HeroSection />
      <SearchFilters/>
      <FeatureProperty/>
      <Gallery />
     </div>
  )
}

export default Home