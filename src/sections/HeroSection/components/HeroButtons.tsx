import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeroButtons = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="items-center box-border caret-transparent gap-x-4 flex flex-col justify-center gap-y-4 mt-10 md:flex-row"
    >
      <Link to="/contact" className="w-full md:w-auto">
        <button className="text-white font-bold bg-blue-950 caret-transparent block w-full px-8 py-3 rounded-full md:w-auto hover:bg-blue-900 transition-colors active:scale-95 transform">
          Jetzt Kontakt aufnehmen
        </button>
      </Link>
      <Link to="/portfolio" className="w-full md:w-auto">
        <button className="text-teal-500 font-bold bg-transparent caret-transparent block w-full border-teal-500 px-8 py-3 rounded-full border-2 border-solid md:w-auto hover:text-white hover:bg-teal-500 transition-all active:scale-95 transform">
          Portfolio ansehen
        </button>
      </Link>
    </motion.div>
  );
};
