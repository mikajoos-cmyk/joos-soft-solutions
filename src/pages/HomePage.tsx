import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { FeatureGrid } from "@/sections/HeroSection/components/FeatureGrid";
import { TrustedCompanies } from "@/sections/HeroSection/components/TrustedCompanies";
import { TestimonialsSection } from "@/sections/HeroSection/components/TestimonialsSection";
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="Startseite"
        description="Joos Soft Solutions aus Dettingen - Maßgeschneiderte Full-Stack Web-Apps, effiziente Desktop-Anwendungen und intelligente Prozessautomatisierung für Ihr Unternehmen in der Region Reutlingen, Stuttgart und Ermstal."
        keywords="Softwareentwicklung Dettingen, IT Dienstleistung Ermstal, App Entwicklung Reutlingen, Web-Apps Stuttgart, Desktop-Anwendungen, Prozessautomatisierung, Python Entwickler, React Entwickler, Full-Stack Entwickler Baden-Württemberg"
        canonical="https://www.joos-soft-solutions.de/"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 py-8 md:max-w-screen-xl md:py-16">
        <section id="home" className="box-border caret-transparent">
          <HeroContent />
          <FeatureGrid />
          <TrustedCompanies />
          <TestimonialsSection />
        </section>

        {/* Quick Links Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="box-border caret-transparent mt-20 md:mt-32"
        >
          <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
            <Link to="/services">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg box-border caret-transparent p-8 rounded-lg transition-all h-full"
              >
                <h3 className="text-2xl font-bold box-border caret-transparent leading-8">
                  Unsere Dienstleistungen
                </h3>
                <p className="box-border caret-transparent mt-4 opacity-90">
                  Entdecken Sie unser vollständiges Leistungsspektrum
                </p>
                <div className="flex items-center gap-2 mt-6 font-bold">
                  Mehr erfahren <ArrowRight className="h-5 w-5" />
                </div>
              </motion.div>
            </Link>

            <Link to="/portfolio">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-950 to-blue-900 text-white shadow-lg box-border caret-transparent p-8 rounded-lg transition-all h-full"
              >
                <h3 className="text-2xl font-bold box-border caret-transparent leading-8">
                  Portfolio
                </h3>
                <p className="box-border caret-transparent mt-4 opacity-90">
                  Sehen Sie unsere realisierten Projekte
                </p>
                <div className="flex items-center gap-2 mt-6 font-bold">
                  Projekte ansehen <ArrowRight className="h-5 w-5" />
                </div>
              </motion.div>
            </Link>

            <Link to="/contact">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-700 to-gray-800 text-white shadow-lg box-border caret-transparent p-8 rounded-lg transition-all h-full"
              >
                <h3 className="text-2xl font-bold box-border caret-transparent leading-8">
                  Kontakt
                </h3>
                <p className="box-border caret-transparent mt-4 opacity-90">
                  Starten Sie Ihr Projekt noch heute
                </p>
                <div className="flex items-center gap-2 mt-6 font-bold">
                  Jetzt anfragen <ArrowRight className="h-5 w-5" />
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
};
