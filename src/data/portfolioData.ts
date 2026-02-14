export type PortfolioProject = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  technologies: string[];
  features: string[];
  challenge: string;
  solution: string;
  results: string[];
  projectUrl?: string;
  createdAt?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pfotencard",
    title: "Pfotencard – Verwaltungssystem für Hundeschulen",
    shortDescription: "Umfassendes Verwaltungssystem für Hundeschulen mit Kursverwaltung, Teilnehmermanagement und automatischer Rechnungsstellung.",
    fullDescription: "Pfotencard ist eine vollständige Web-Anwendung, die speziell für Hundeschulen entwickelt wurde. Das System ermöglicht die effiziente Verwaltung von Kursen, Teilnehmern, Trainern und Finanzen an einem zentralen Ort.",
    imageUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/6.svg",
    category: "Full-Stack Webanwendung",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe API"],
    features: [
      "Kursverwaltung mit Zeitplanung und Kapazitätskontrolle",
      "Teilnehmermanagement mit Hundeprofile",
      "Automatische Rechnungsstellung und Zahlungsabwicklung",
      "Trainer-Dashboard mit Anwesenheitslisten",
      "E-Mail-Benachrichtigungen für Kursänderungen",
      "Responsive Design für mobile Nutzung"
    ],
    challenge: "Die Hundeschule verwaltete alle Daten manuell in Excel-Tabellen, was zu Fehlern, Doppelbuchungen und einem hohen Zeitaufwand führte. Es fehlte eine zentrale Lösung für Kursverwaltung, Teilnehmerkommunikation und Abrechnung.",
    solution: "Entwicklung einer maßgeschneiderten Web-Anwendung mit intuitiver Benutzeroberfläche, die alle Geschäftsprozesse digitalisiert und automatisiert. Integration von Stripe für sichere Online-Zahlungen und automatische E-Mail-Benachrichtigungen.",
    results: [
      "80% Zeitersparnis bei der Verwaltung",
      "Eliminierung von Doppelbuchungen",
      "Verbesserte Kundenkommunikation",
      "Professionelles Auftreten durch automatisierte Rechnungen"
    ],
    clientTestimonial: {
      quote: "Pfotencard hat unsere Hundeschule revolutioniert. Was früher Stunden dauerte, erledigen wir jetzt in Minuten. Unsere Kunden lieben die einfache Online-Buchung!",
      author: "Sarah M., Hundeschule Pfotenglück"
    }
  },
  {
    id: "angebotsprogramm",
    title: "Angebotsprogramm für Haustechnik",
    shortDescription: "Desktop-Anwendung zur schnellen Erstellung professioneller Angebote mit automatischer Preisberechnung und PDF-Export.",
    fullDescription: "Eine spezialisierte Desktop-Anwendung für Haustechnik-Unternehmen, die den gesamten Angebotsprozess von der Artikelauswahl bis zum fertigen PDF automatisiert.",
    imageUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/7.svg",
    category: "Desktop-Anwendung",
    technologies: ["Python", "PyQt5", "SQLite", "ReportLab"],
    features: [
      "Artikeldatenbank mit Preispflege",
      "Drag-and-Drop Angebotserstellung",
      "Automatische Rabatt- und Aufschlagsberechnung",
      "Professionelle PDF-Generierung mit Firmenlogo",
      "Kundenverwaltung mit Angebotshistorie",
      "Offline-Funktionalität"
    ],
    challenge: "Das Haustechnik-Unternehmen erstellte Angebote manuell in Word, was fehleranfällig war und viel Zeit kostete. Preisänderungen mussten in jedem Dokument einzeln aktualisiert werden.",
    solution: "Entwicklung einer Desktop-Anwendung mit zentraler Artikeldatenbank und automatischer Preisberechnung. Die Software generiert professionelle PDFs mit einem Klick und speichert alle Angebote für spätere Referenz.",
    results: [
      "70% schnellere Angebotserstellung",
      "Fehlerfreie Preisberechnungen",
      "Konsistentes, professionelles Erscheinungsbild",
      "Einfache Nachverfolgung aller Angebote"
    ],
    clientTestimonial: {
      quote: "Das Angebotsprogramm hat unsere Effizienz enorm gesteigert. Wir können jetzt doppelt so viele Angebote in der gleichen Zeit erstellen – und sie sehen auch noch besser aus!",
      author: "Thomas K., V.i.P. Haustechnik"
    }
  },
  {
    id: "datenmigration",
    title: "Datenmigrationstool für ERP-Systeme",
    shortDescription: "Automatisiertes Tool zur fehlerfreien Migration von Kundendaten zwischen verschiedenen ERP-Systemen.",
    fullDescription: "Ein spezialisiertes Migrationstool, das Unternehmen beim Wechsel von ERP-Systemen unterstützt. Das Tool validiert, transformiert und migriert Daten automatisch und erstellt detaillierte Berichte.",
    imageUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/8.svg",
    category: "Prozessautomatisierung",
    technologies: ["Python", "Pandas", "SQL", "Excel Integration"],
    features: [
      "Automatische Datenvalidierung und Fehlerprüfung",
      "Flexible Mapping-Konfiguration",
      "Batch-Verarbeitung großer Datenmengen",
      "Detaillierte Migrations-Reports",
      "Rollback-Funktionalität bei Fehlern",
      "Support für verschiedene Datenformate (CSV, Excel, SQL)"
    ],
    challenge: "Ein Unternehmen musste 50.000+ Kundendatensätze von einem alten ERP-System in ein neues migrieren. Manuelle Migration war unmöglich, und Datenverlust oder Fehler hätten schwerwiegende Folgen.",
    solution: "Entwicklung eines intelligenten Migrationstools, das Daten automatisch validiert, transformiert und in das neue System überträgt. Das Tool erkennt Inkonsistenzen und erstellt detaillierte Berichte für manuelle Nachbearbeitung.",
    results: [
      "Erfolgreiche Migration von 50.000+ Datensätzen",
      "99.8% Datengenauigkeit",
      "95% Zeitersparnis gegenüber manueller Migration",
      "Null Datenverlust"
    ],
    clientTestimonial: {
      quote: "Mika hat hervorragende Arbeit geleistet! Die Datenmigration verlief reibungslos und fehlerfrei. Das Tool hat uns Wochen an Arbeit erspart.",
      author: "excel758, Fiverr"
    }
  },
  {
    id: "aktienanalyse",
    title: "Aktienmarkt-Analyse-Software",
    shortDescription: "Fortgeschrittene Analyse-Software mit Echtzeit-Daten, technischen Indikatoren und interaktiven Heatmaps.",
    fullDescription: "Eine umfassende Desktop-Anwendung für Aktienanalyse mit Echtzeit-Datenintegration, technischen Indikatoren und visuellen Analysetools.",
    imageUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/9.svg",
    category: "Data Science & Analyse",
    technologies: ["Python", "Pandas", "Matplotlib", "yFinance API", "NumPy"],
    features: [
      "Echtzeit-Aktienkurse über API-Integration",
      "Technische Indikatoren (RSI, MACD, Bollinger Bands)",
      "Interaktive Heatmaps für Marktübersicht",
      "Portfolio-Tracking und Performance-Analyse",
      "Historische Datenanalyse und Backtesting",
      "Export-Funktionen für Reports"
    ],
    challenge: "Ein privater Investor benötigte ein Tool zur systematischen Analyse von Aktien mit technischen Indikatoren, ohne teure Abo-Software nutzen zu müssen.",
    solution: "Entwicklung einer Desktop-Anwendung, die kostenlose APIs nutzt und alle wichtigen Analyse-Tools bietet. Die Software visualisiert komplexe Daten in verständlichen Charts und Heatmaps.",
    results: [
      "Vollständige Unabhängigkeit von teuren Abo-Diensten",
      "Schnellere Investitionsentscheidungen",
      "Bessere Marktübersicht durch Visualisierungen",
      "Individuelle Anpassung an persönliche Strategien"
    ]
  }
];

export const getProjectById = (id: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  return portfolioProjects.filter(project => project.category === category);
};
