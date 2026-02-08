import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";
import Image from "next/image";
// ... inside your component
export default function Carousel(){
    
const [currentSlide, setCurrentSlide] = useState(0);
const totalSlides = 13;

// Auto-advance slides every 2 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, 3000);

  return () => clearInterval(interval);
}, []);

const goToSlide = (index: number) => {
  setCurrentSlide(index);
};

const goToPrevious = () => {
  setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};

const goToNext = () => {
  setCurrentSlide((prev) => (prev + 1) % totalSlides);
};

return (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative order-1 lg:order-2"
  >
    <div className="relative max-w-md mx-auto">
      {/* Carousel Container */}
      <div className="relative w-full max-w-[350px] aspect-[3/4] mx-auto overflow-hidden rounded-lg border border-gray-700 shadow-2xl shadow-black/50">
        {/* Images */}
        {Array.from({ length: totalSlides }, (_, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={`/carousel_photos/${i + 1}.png`}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === currentSlide 
                  ? 'bg-gray-600/85 w-6  ' 
                  : 'bg-gray-600/20 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);
}