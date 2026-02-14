import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PortfolioProject, portfolioProjects as defaultPortfolioProjects } from '@/data/portfolioData';

type Testimonial = {
  quote: string;
  author: string;
  project: string;
};

type TrustedCompany = {
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

type ContentData = {
  portfolioProjects: PortfolioProject[];
  testimonials: Testimonial[];
  trustedCompanies: TrustedCompany[];
};

type ContentContextType = {
  content: ContentData;
  updatePortfolioProjects: (projects: PortfolioProject[]) => void;
  updateTestimonials: (testimonials: Testimonial[]) => void;
  updateTrustedCompanies: (companies: TrustedCompany[]) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within ContentProvider');
  }
  return context;
};

type ContentProviderProps = {
  children: ReactNode;
};

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Mika hat hervorragende Arbeit geleistet! Ich hatte eine Excel-Tabelle als Grundlage und eine klare Vorstellung davon, wie mein Python-Programm aussehen sollte – und Mika hat meine Erwartungen mehr als nur erfüllt. Er hat meine Anforderungen perfekt umgesetzt, professionell gearbeitet und das Projekt mit großem Fachwissen realisiert. Die Kommunikation war reibungslos, die Umsetzung präzise, und das Endergebnis ist genau das, was ich mir gewünscht habe. Dank Mika weiß ich jetzt, dass meine Ideen tatsächlich in Programme umgesetzt werden können – eine Erkenntnis, die für mich unglaublich wertvoll ist! In Zukunft werde ich definitiv wieder mit ihm zusammenarbeiten. Absolut empfehlenswert – jederzeit wieder! Vielen Dank, Mika! 💯",
    author: "nickel_15",
    project: ""
  },
  {
    quote: "He does his work absolutely great! A great professional who immediately understood the task we needed and nailed it with the first delivery to 100%. The code is working as expected and he's done a great job. We would hire him again any time!",
    author: "cwbsl",
    project: ""
  },
  {
    quote: "Super Service! Auch nach der Lieferung 1A Service mit Video erklärungen, und immer wieder weiteren Hilfen. Code war einwandfrei. immer wieder empfehlbar👍🏼",
    author: "dstore4you",
    project: ""
  }
];

const defaultTrustedCompanies: TrustedCompany[] = [
  {
    name: "V. i. P. Haustechnik",
    logoUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/vip_haustechnik.png",
    websiteUrl: "https://vip-haustechnik.de/"
  },
  {
    name: "Pixelgipfel",
    logoUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/pixelgipfel.png",
    websiteUrl: "http://pixelgipfel.ch/"
  },
  {
    name: "Horstmann Orthopädie-Schuhtechnik",
    logoUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/horstmann.png",
    websiteUrl: "http://horstmann-orthoschuh.de/"
  },
  {
    name: "Schneider Bodenbeschichtungen",
    logoUrl: "https://c.animaapp.com/mlmelhdkAuv6uy/assets/schneider_bodenbeschichtungen.jpg",
    websiteUrl: "https://schneider-bodenbeschichtungen.de/"
  }
];

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState<ContentData>(() => {
    const stored = localStorage.getItem('siteContent');
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      portfolioProjects: defaultPortfolioProjects,
      testimonials: defaultTestimonials,
      trustedCompanies: defaultTrustedCompanies
    };
  });

  useEffect(() => {
    localStorage.setItem('siteContent', JSON.stringify(content));
  }, [content]);

  const updatePortfolioProjects = (projects: PortfolioProject[]) => {
    setContent(prev => ({ ...prev, portfolioProjects: projects }));
  };

  const updateTestimonials = (testimonials: Testimonial[]) => {
    setContent(prev => ({ ...prev, testimonials }));
  };

  const updateTrustedCompanies = (companies: TrustedCompany[]) => {
    setContent(prev => ({ ...prev, trustedCompanies: companies }));
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      updatePortfolioProjects, 
      updateTestimonials, 
      updateTrustedCompanies 
    }}>
      {children}
    </ContentContext.Provider>
  );
};
