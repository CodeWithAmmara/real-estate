import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/homepage/HeroSection";
import SearchFilters from "../components/common/SearchFilters";
import FeatureProperty from "../components/homepage/FeatureProperty";
import Gallery from "../components/homepage/Gallery";
import banner from "../assets/images/banner.jpg";
import LocationsSection from "../components/homepage/LocationsSection";
import ServicesSection from "../components/homepage/ServiceSection";
import Benefit from "../components/homepage/Benefit";
import Testimonials from "../components/homepage/Testimonials";
import TeamSection from "../components/homepage/TeamSection";

function Home() {
  const texts = ["Dream Home", "Perfect Home"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 text-white text-center w-full max-w-5xl px-4">
          {/* Heading */}
         <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 flex flex-wrap justify-center gap-2">
          Find Your
        <span className="relative inline-flex overflow-hidden">
         <AnimatePresence mode="wait">
         <motion.span
            key={currentText}
           initial={{ y: "100%", opacity: 0 }}
           animate={{ y: "0%", opacity: 1 }}
           exit={{ y: "-100%", opacity: 0 }}
           transition={{ duration: 0.6, ease: "easeInOut" }}
           className="block"
          >
         {texts[currentText]}
        </motion.span>
        </AnimatePresence>
       </span>
        </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
            We are a real estate agency that will help you find the best
            residence you dream of, let’s discuss your dream house?
          </p>

          {/* ✅ Your SearchFilters Component */}
          <div className="mt-24">
          <SearchFilters variant="homepage" />
          </div>
        </div>
      </section>

      <FeatureProperty />
      <LocationsSection />
      <ServicesSection />
      <Benefit />
      <FeatureProperty />
      <Testimonials />
      <TeamSection />
      <Gallery />
    </div>
  );
}

export default Home;
