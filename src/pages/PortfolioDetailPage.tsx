import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { getProjectById } from '@/data/portfolioData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const PortfolioDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <SEO 
        title={project.title}
        description={project.shortDescription}
        keywords={`${project.category}, ${project.technologies.join(', ')}`}
        ogImage={project.imageUrl}
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 py-8 md:max-w-screen-xl md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/portfolio"
            className="text-teal-500 font-bold items-center inline-flex gap-2 mb-8 hover:underline"
          >
            <ArrowLeft className="h-5 w-5" />
            Zurück zur Übersicht
          </Link>

          {/* Hero Section */}
          <div className="box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                {project.category}
              </div>
              <h1 className="text-blue-950 text-3xl font-bold box-border caret-transparent leading-9 md:text-4xl md:leading-10">
                {project.title}
              </h1>
              <p className="text-gray-600 text-lg box-border caret-transparent leading-7 mt-4">
                {project.fullDescription}
              </p>
              <div className="mt-6">
                <h3 className="text-blue-950 text-lg font-bold mb-3">Technologien:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-50 text-blue-950 font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-lg shadow-xl"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="box-border caret-transparent w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Challenge & Solution */}
          <div className="box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mb-12 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 p-8 rounded-lg"
            >
              <h2 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8 mb-4">
                Die Herausforderung
              </h2>
              <p className="text-gray-700 box-border caret-transparent leading-7">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-green-50 p-8 rounded-lg"
            >
              <h2 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8 mb-4">
                Die Lösung
              </h2>
              <p className="text-gray-700 box-border caret-transparent leading-7">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg p-8 rounded-lg mb-12"
          >
            <h2 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8 mb-6">
              Hauptfunktionen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-8 rounded-lg mb-12"
          >
            <h2 className="text-2xl font-bold box-border caret-transparent leading-8 mb-6">
              Ergebnisse & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          {project.clientTestimonial && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg p-8 rounded-lg mb-12"
            >
              <img
                src="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-5.svg"
                alt="Quote"
                className="text-teal-500 box-border caret-transparent h-8 opacity-50 w-8 mb-4"
              />
              <p className="text-gray-700 italic text-lg box-border caret-transparent leading-8 mb-4">
                &quot;{project.clientTestimonial.quote}&quot;
              </p>
              <p className="text-blue-950 font-bold">
                — {project.clientTestimonial.author}
              </p>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-blue-950 text-white p-12 rounded-lg"
          >
            <h2 className="text-3xl font-bold box-border caret-transparent leading-9 mb-4">
              Haben Sie ein ähnliches Projekt?
            </h2>
            <p className="text-lg box-border caret-transparent leading-7 mb-8 opacity-90">
              Lassen Sie uns gemeinsam Ihre Vision verwirklichen
            </p>
            <Link
              to="/contact"
              className="inline-block text-blue-950 font-bold bg-white caret-transparent px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Jetzt Kontakt aufnehmen
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
