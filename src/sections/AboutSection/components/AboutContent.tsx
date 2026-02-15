import { motion } from 'framer-motion';

export const AboutContent = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 md:grid-cols-[repeat(5,minmax(0px,1fr))]">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_2] md:col-start-[span_2]"
      >
        <img
          src="Porträtbild.jpg"
          alt="Porträt von Mika Joos, Gründer von Joos Soft Solutions"
          className="shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px] box-border caret-transparent max-w-full mx-auto rounded-full"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_3] md:col-start-[span_3]"
      >
        <h2 className="text-blue-950 text-3xl font-bold box-border caret-transparent leading-9 md:text-4xl md:leading-10">
          Über Mika Joos
        </h2>
        <p className="text-gray-700 text-lg box-border caret-transparent leading-7 mt-6">
          Als Gründer von Joos Soft Solutions arbeite ich seit über 2 Jahren
          erfolgreich auf Fiverr, wo ich mit 4.8 Sternen bei über 100
          abgeschlossenen Projekten eine hohe Kundenzufriedenheit sichergestellt
          habe. Meine Expertise teile ich auch auf Udemy, wo mein PyCharm-Kurs
          ein Bestseller ist und mein Data-Science-Kurs fundiertes Wissen
          vermittelt.
        </p>
        <h3 className="text-blue-950 text-2xl font-bold box-border caret-transparent leading-8 mt-8">
          Philosophie &amp; Werte
        </h3>
        <p className="text-gray-700 text-lg box-border caret-transparent leading-7 mt-4">
          Meine oberste Priorität ist die Kundenzufriedenheit. Ich bin davon
          überzeugt, dass maßgeschneiderte Software und intelligente
          Automatisierung Ihnen nicht nur Arbeit abnehmen, sondern auch Ihre
          Produktivität erheblich steigern können. Mein Ziel ist es, Ihnen dabei
          zu helfen, Ihre Geschäftsziele effizienter zu erreichen.
        </p>
      </motion.div>
    </div>
  );
};
