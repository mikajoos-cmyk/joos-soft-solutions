import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';

export const ImpressumPage = () => {
  return (
    <>
      <SEO 
        title="Impressum"
        description="Impressum und rechtliche Informationen von Joos Soft Solutions - Mika Joos, Listweg 4, 72581 Dettingen, Deutschland. Umsatzsteuer-ID: 89516/03232"
        keywords="Impressum Joos Soft Solutions, Rechtliches, Kontaktdaten Dettingen, Mika Joos Impressum"
        canonical="https://www.joos-soft-solutions.de/impressum"
      />
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 py-8 md:max-w-4xl md:py-16">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="box-border caret-transparent"
        >
          <h1 className="text-blue-950 text-4xl font-bold box-border caret-transparent leading-10 mb-8 md:text-5xl md:leading-[3.5rem]">
            Impressum
          </h1>
          <div className="text-gray-700 box-border caret-transparent space-y-8">
            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="box-border caret-transparent">
                Joos Soft Solutions
                <br className="box-border caret-transparent" />
                Listweg 4<br className="box-border caret-transparent" />
                72581 Dettingen
                <br className="box-border caret-transparent" />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                Kontakt
              </h2>
              <p className="box-border caret-transparent">
                Telefon: 01633058605
                <br className="box-border caret-transparent" />
                E-Mail: info@joos-soft-solutions.de
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                Umsatzsteuer-ID
              </h2>
              <p className="box-border caret-transparent">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                <br className="box-border caret-transparent" />
                89516/03232
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="box-border caret-transparent">Mika Joos</p>
            </div>

            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="box-border caret-transparent">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  className="text-teal-500 box-border caret-transparent hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                .<br className="box-border caret-transparent" />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="box-border caret-transparent mt-4">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-blue-950 text-2xl font-semibold box-border caret-transparent leading-8 mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>
              
              <h3 className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-7 mt-6 mb-3">
                Haftung für Inhalte
              </h3>
              <p className="box-border caret-transparent">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
                oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-7 mt-6 mb-3">
                Haftung für Links
              </h3>
              <p className="box-border caret-transparent">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>

              <h3 className="text-blue-950 text-xl font-semibold box-border caret-transparent leading-7 mt-6 mb-3">
                Urheberrecht
              </h3>
              <p className="box-border caret-transparent">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht
                kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
                Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};
