import { motion } from 'framer-motion';
import { TestimonialsCarousel } from "@/sections/HeroSection/components/TestimonialsCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="box-border caret-transparent mt-20 md:mt-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="box-border caret-transparent text-center mb-12"
      >
        <h2 className="text-blue-950 text-3xl font-bold box-border caret-transparent leading-9 md:text-4xl md:leading-10">
          Was unsere Kunden sagen
        </h2>
        <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-2xl mt-4 mx-auto">
          Echtes Feedback von zufriedenen Partnern auf Fiverr.
        </p>
      </motion.div>
      <TestimonialsCarousel />
    </div>
  );
};
