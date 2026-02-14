import { motion } from 'framer-motion';
import { CompanyLogos } from "@/sections/HeroSection/components/CompanyLogos";

export const TrustedCompanies = () => {
  return (
    <div className="box-border caret-transparent mt-20 md:mt-32">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gray-500 text-2xl font-bold box-border caret-transparent tracking-[1.2px] leading-8 text-center"
      >
        UNTERNEHMEN, DIE UNS VERTRAUEN
      </motion.h2>
      <CompanyLogos />
    </div>
  );
};
