import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Props {
  isFullscreen: boolean;
  setIsFullscreen: (e: boolean) => void;
}

export default function Carousel({ isFullscreen, setIsFullscreen }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 13;

  useEffect(() => {
    if (isFullscreen) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [isFullscreen]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) closeFullscreen();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative order-1 lg:order-2"
      >
        <div className="relative max-w-md mx-auto">
          {/* 
            FIX 1: The aspect-[3/4] on the container already reserves space,
            but we add explicit width/height to help the browser avoid CLS.
            The container has a fixed intrinsic size so no layout shift occurs.
          */}
          <div className="relative w-full max-w-[350px] aspect-[3/4] mx-auto overflow-hidden rounded-lg border border-gray-700 shadow-2xl shadow-black/50">
            
            {Array.from({ length: totalSlides }, (_, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${
                  i === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={openFullscreen}
              >
                <Image
                  src={`/carousel_photos/${i + 1}.webp`}
                  alt={`Slide ${i + 1}`}
                  fill
                  // FIX 2: Only the first (visible) slide gets priority loading.
                  // All others are lazy — they don't block rendering or cause shifts.
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "low"}
                  // FIX 3: Correct sizes — the image is max 350px wide, not 609px
                  sizes="(max-width: 640px) 90vw, 350px"
                  className="object-cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
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
                  onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === currentSlide
                      ? 'bg-gray-600/85 w-6'
                      : 'bg-gray-600/20 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
            onClick={closeFullscreen}
          >
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-[110]"
              aria-label="Close fullscreen"
            >
              <X className="w-8 h-8 cursor-pointer" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-[110]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-200 z-[110]"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh] max-w-5xl z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* FIX 4: Fullscreen also uses .webp for consistency, and correct priority */}
              <Image
                src={`/carousel_photos/${currentSlide + 1}.webp`}
                alt={`Slide ${currentSlide + 1}`}
                fill
                priority
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[110]">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); goToSlide(i); }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}