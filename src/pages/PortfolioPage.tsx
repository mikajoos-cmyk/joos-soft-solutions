import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { useContent } from '@/contexts/ContentContext';
import { ArrowRight } from 'lucide-react';

export const PortfolioPage = () => {
  const { content } = useContent();
  const portfolioProjects = content.portfolioProjects;

  return (
    <>
      <SEO 
        title="Portfolio"
        description="Entdecken Sie unsere realisierten Projekte aus Dettingen - Von Verwaltungssystemen über Desktop-Anwendungen bis hin zu Datenanalyse-Tools. Erfolgreiche Softwarelösungen für Unternehmen in der Region Reutlingen, Stuttgart und deutschlandweit."
        keywords="Portfolio Softwareentwicklung, Projekte Dettingen, Referenzen IT Dienstleistung, Kundenprojekte Reutlingen, Softwareprojekte Baden-Württemberg"
        canonical="https://www.joos-soft-solutions.de/portfolio"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 py-8 md:max-w-screen-xl md:py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="box-border caret-transparent"
        >
          <div className="box-border caret-transparent text-center mb-12">
            <h1 className="text-blue-950 text-4xl font-bold box-border caret-transparent leading-10 md:text-5xl md:leading-[3.5rem]">
              Portfolio
            </h1>
            <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-2xl mt-4 mx-auto">
              Ein Einblick in unsere realisierten Projekte und erfolgreichen Lösungen
            </p>
          </div>

          <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="box-border caret-transparent"
              >
                <Link to={`/portfolio/${project.id}`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white shadow-lg box-border caret-transparent overflow-hidden rounded-lg transition-all h-full flex flex-col"
                  >
                    <div className="relative overflow-hidden h-64 bg-gray-50 flex items-center justify-center">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="box-border caret-transparent h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 box-border caret-transparent mt-3 flex-grow">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            +{project.technologies.length - 3} mehr
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-teal-500 font-bold mt-6">
                        Details ansehen <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};
