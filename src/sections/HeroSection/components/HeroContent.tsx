import { motion } from 'framer-motion';
import { HeroButtons } from "@/sections/HeroSection/components/HeroButtons";

export const HeroContent = () => {
  return (
    <div className="box-border caret-transparent text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-blue-950 text-4xl font-extrabold box-border caret-transparent leading-[45px] md:text-6xl md:leading-[60px]"
      >
        Individuelle Softwarelösungen &amp; Automatisierung
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-blue-950 text-lg box-border caret-transparent leading-7 mt-4 md:text-xl"
      >
          Ihr Experte für Softwareentwicklung aus Dettingen an der Erms.
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-screen-md mt-8 mx-auto"
      >
        Maßgeschneiderte Full-Stack Web-Apps, effiziente Desktop-Anwendungen und
        intelligente Prozessautomatisierung für Ihr Unternehmen.
      </motion.p>
      <HeroButtons />
    </div>
  );
};
