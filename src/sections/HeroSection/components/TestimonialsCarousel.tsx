import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '@/contexts/ContentContext';

export const TestimonialsCarousel = () => {
  const { content } = useContent();
  const testimonials = content.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null; // Oder eine Lade-Komponente / Platzhalter
  }

  const testimonial = testimonials[currentIndex];

  if (!testimonial) {
    return null;
  }

  return (
    <div 
      className="relative box-border caret-transparent w-full overflow-hidden px-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent flex flex-col h-full justify-between p-8 rounded-lg max-w-4xl mx-auto">
            <div className="box-border caret-transparent">
              <img
                src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-5.svg"
                alt="Icon"
                className="text-teal-500 box-border caret-transparent h-8 opacity-50 w-8"
              />
              <p className="text-gray-700 italic box-border caret-transparent mt-4">
                &quot;{testimonial.quote}&quot;
              </p>
            </div>
            <div className="box-border caret-transparent mt-6">
              <div className="items-center box-border caret-transparent flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-6.svg"
                    alt="Star"
                    className="text-yellow-400 box-border caret-transparent h-5 w-5"
                  />
                ))}
              </div>
              <p className="text-blue-950 font-bold box-border caret-transparent mt-2">
                {testimonial.author}
              </p>
              {testimonial.project && (
                <p className="text-gray-500 text-sm box-border caret-transparent leading-5">
                  {testimonial.project}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute text-blue-950 items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] box-border caret-transparent flex h-11 justify-center mt-[-22px] w-11 z-10 rounded-full left-1 top-2/4 hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute text-blue-950 items-center bg-white shadow-[rgba(0,0,0,0.1)_0px_4px_12px_0px] box-border caret-transparent flex h-11 justify-center mt-[-22px] w-11 z-10 rounded-full right-1 top-2/4 hover:bg-gray-100 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-teal-500' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
