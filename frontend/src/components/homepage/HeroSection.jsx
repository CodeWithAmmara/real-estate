import React, { useState, useEffect } from 'react';
import hero1 from '../../assets/images/slider.jpg.webp';
import hero2 from '../../assets/images/slider2.jpg.webp';
import hero3 from '../../assets/images/slider3.jpg.webp';

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Your Property Is Our Priority',
    subtitle: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    id: 2,
    image: hero2,
    title: 'Let Your Home Be Unique & Stylish',
    subtitle: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
  {
    id: 3,
    image: hero3,
    title: 'Modern House Make Better Life',
    subtitle: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="w-full h-[100vh] relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-white text-lg md:text-2xl max-w-2xl mb-6">
                  {slide.subtitle}
                </p>
                <button className="bg-lime-700 text-white px-8 py-4  ">
                  LEARN MORE 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
