import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export const AboutLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mt-16 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        href="https://share.google/dOjPDAtyEdrjBcvM8"
        className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent block p-8 rounded-lg transition-all"
      >
        <h4 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8">
          Meine Udemy Kurse
        </h4>
        <p className="text-gray-600 box-border caret-transparent mt-2">
          Entdecken Sie meine Bestseller-Kurse auf Udemy und erweitern Sie Ihr
          Wissen!
        </p>
        <span className="text-teal-500 font-bold box-border caret-transparent inline-flex items-center gap-2 mt-4">
          Zu Udemy <ExternalLink className="h-4 w-4" />
        </span>
      </motion.a>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        href="https://de.fiverr.com/s/R7W23bL"
        className="bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] box-border caret-transparent block p-8 rounded-lg transition-all"
      >
        <h4 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8">
          Mein Fiverr Profil
        </h4>
        <p className="text-gray-600 box-border caret-transparent mt-2">
          Sie sind noch unsicher? Sehen Sie sich meine Top-Bewertungen und
          Angebote auf Fiverr an!
        </p>
        <span className="text-teal-500 font-bold box-border caret-transparent inline-flex items-center gap-2 mt-4">
          Zu Fiverr <ExternalLink className="h-4 w-4" />
        </span>
      </motion.a>
    </div>
  );
};
