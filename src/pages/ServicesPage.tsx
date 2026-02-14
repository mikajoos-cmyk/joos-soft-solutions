import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Dienstleistungen"
        description="Full-Stack Webanwendungen, Desktop-App Entwicklung, Prozessautomatisierung, Data Science & Analyse, Software-Integrationen - Innovative IT-Lösungen für Unternehmen in Dettingen, Reutlingen, Stuttgart und Umgebung."
        keywords="Webanwendungen Reutlingen, Desktop Apps Entwicklung, Automatisierung Stuttgart, Data Science Dettingen, Software Integration, Flask, Django, React, Python Entwicklung Baden-Württemberg"
        canonical="https://www.joos-soft-solutions.de/services"
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
              Unsere Expertise
            </h1>
            <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-2xl mt-4 mx-auto">
              Innovative Lösungen für Ihre Geschäftsprozesse
            </p>
          </div>
          <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
            <ServiceCard
              iconSrc="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-9.svg"
              title="Full-Stack Webanwendungen"
              description={
                <>
                  Wir entwickeln moderne, skalierbare und benutzerfreundliche{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Webanwendungen
                  </strong>{" "}
                  von Grund auf. Mit Python-Frameworks wie{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Flask, Django oder FastAPI
                  </strong>{" "}
                  für ein robustes Backend und{" "}
                  <strong className="font-bold box-border caret-transparent">
                    React
                  </strong>{" "}
                  für ein dynamisches Frontend.
                </>
              }
              buttonText="Jetzt anfragen"
              delay={0.1}
            />
            <ServiceCard
              iconSrc="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-10.svg"
              title="Desktop-App Entwicklung"
              description={
                <>
                  Wir konzipieren und entwickeln maßgeschneiderte{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Desktop-Anwendungen
                  </strong>
                  , die Ihre internen Abläufe optimieren. Von der{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Datenerfassung
                  </strong>{" "}
                  bis zur komplexen Business-Software – intuitiv, performant und
                  sicher.
                </>
              }
              buttonText="Jetzt anfragen"
              delay={0.2}
            />
            <ServiceCard
              iconSrc="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-11.svg"
              title="Prozessautomatisierung"
              description={
                <>
                  Verabschieden Sie sich von redundanten Aufgaben! Wir analysieren
                  Ihre Arbeitsabläufe und implementieren{" "}
                  <strong className="font-bold box-border caret-transparent">
                    intelligente Automatisierungen
                  </strong>
                  , die Ihnen Zeit und Ressourcen sparen. Für mehr{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Effizienz
                  </strong>{" "}
                  und weniger Fehler.
                </>
              }
              buttonText="Jetzt anfragen"
              delay={0.3}
            />
            <ServiceCard
              iconSrc="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-12.svg"
              title="Data Science & Analyse"
              description={
                <>
                  Nutzen Sie das volle Potenzial Ihrer Daten. Wir helfen Ihnen bei
                  der{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Sammlung, Analyse und Visualisierung
                  </strong>{" "}
                  Ihrer Geschäftsdaten, um fundierte Entscheidungen zu treffen und
                  neue Geschäftschancen zu identifizieren.
                </>
              }
              buttonText="Jetzt anfragen"
              delay={0.4}
            />
            <ServiceCard
              iconSrc="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-13.svg"
              title="Software-Integrationen"
              description={
                <>
                  Bestehende Systeme nahtlos verbinden: Wir sorgen für einen{" "}
                  <strong className="font-bold box-border caret-transparent">
                    reibungslosen Datenfluss
                  </strong>{" "}
                  und eine effiziente Gesamtstruktur, indem wir Ihre verschiedenen{" "}
                  <strong className="font-bold box-border caret-transparent">
                    Softwarelösungen
                  </strong>{" "}
                  miteinander kommunizieren lassen.
                </>
              }
              buttonText="Jetzt anfragen"
              delay={0.5}
            />
          </div>
        </motion.section>
      </div>
    </>
  );
};
