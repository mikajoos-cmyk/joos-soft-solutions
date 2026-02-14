import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { ContactForm } from "@/sections/ContactSection/components/ContactForm";
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Kontakt"
        description="Kontaktieren Sie Joos Soft Solutions für Ihr nächstes Softwareprojekt. Wir freuen uns auf Ihre Nachricht und beraten Sie gerne."
        keywords="Kontakt, Anfrage, Beratung, Softwareentwicklung Anfrage"
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
              Kontakt aufnehmen
            </h1>
            <p className="text-gray-600 text-lg box-border caret-transparent leading-7 max-w-2xl mt-4 mx-auto">
              Haben Sie ein Projekt im Sinn? Ich freue mich auf Ihre Nachricht.
            </p>
          </div>

          <div className="box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-lg box-border caret-transparent p-8 rounded-lg"
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="box-border caret-transparent"
            >
              <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white p-8 rounded-lg mb-6">
                <h2 className="text-2xl font-bold box-border caret-transparent leading-8 mb-6">
                  Kontaktinformationen
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">E-Mail</h3>
                      <a href="mailto:kontakt@joos-soft-solutions.de" className="hover:underline opacity-90">
                        kontakt@joos-soft-solutions.de
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Telefon</h3>
                      <a href="tel:01633058605" className="hover:underline opacity-90">
                        01633058605
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p className="opacity-90">
                        Listweg 4<br />
                        72581 Dettingen<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-8 rounded-lg">
                <h3 className="text-blue-950 text-xl font-bold box-border caret-transparent leading-7 mb-4">
                  Warum mit uns arbeiten?
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>Schnelle Reaktionszeit innerhalb von 24 Stunden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>Kostenlose Erstberatung und Projekteinschätzung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>Transparente Kommunikation während des gesamten Projekts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">✓</span>
                    <span>4.8 Sterne Bewertung auf Fiverr</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};
