import { motion } from 'framer-motion';
import { useContent } from '@/contexts/ContentContext';

export const CompanyLogos = () => {
  const { content } = useContent();
  const companies = content.trustedCompanies;

  return (
    <div className="items-center box-border caret-transparent gap-x-8 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-4 mt-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      {companies.map((company, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="box-border caret-transparent block"
              >
                <img
                  src={company.logoUrl}
                  alt={`Logo von ${company.name}`}
                  className="box-border caret-transparent grayscale hover:grayscale-0 max-w-full mx-auto transition-all duration-300"
                />
              </motion.a>
      ))}
    </div>
  );
};
