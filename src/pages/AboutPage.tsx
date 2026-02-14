import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";
import { AboutLinks } from "@/sections/AboutSection/components/AboutLinks";

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="Über mich"
        description="Lernen Sie Mika Joos kennen - Gründer von Joos Soft Solutions aus Dettingen mit über 2 Jahren Erfahrung und 4.8 Sternen auf Fiverr bei über 100 abgeschlossenen Projekten. Softwareentwicklung in der Region Reutlingen und Stuttgart."
        keywords="Mika Joos, Softwareentwickler Dettingen, Fiverr, Udemy, Python Entwickler, React Entwickler, IT Experte Ermstal"
        canonical="https://www.joos-soft-solutions.de/about"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 py-8 md:max-w-screen-xl md:py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="box-border caret-transparent"
        >
          <AboutContent />
          <AboutLinks />
        </motion.section>
      </div>
    </>
  );
};
