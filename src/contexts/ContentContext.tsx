import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PortfolioProject, portfolioProjects as defaultPortfolioProjects } from '@/data/portfolioData';
import { supabase } from '@/lib/supabaseClient';

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  project: string;
  createdAt?: string;
};

type TrustedCompany = {
  id: number;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  createdAt?: string;
};

type ContentData = {
  portfolioProjects: PortfolioProject[];
  testimonials: Testimonial[];
  trustedCompanies: TrustedCompany[];
};

type ContentContextType = {
  content: ContentData;
  loading: boolean;
  updatePortfolioProjects: (projects: PortfolioProject[]) => Promise<void>;
  updateTestimonials: (testimonials: Testimonial[]) => Promise<void>;
  updateTrustedCompanies: (companies: TrustedCompany[]) => Promise<void>;
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

export const ContentProvider = ({ children }: ContentProviderProps) => {
  const [content, setContent] = useState<ContentData>({
    portfolioProjects: defaultPortfolioProjects,
    testimonials: [],
    trustedCompanies: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    try {
      const [portfolioRes, testimonialsRes, companiesRes] = await Promise.all([
        supabase.from('portfolio_projects').select(`
          id,
          title,
          shortDescription:short_description,
          fullDescription:full_description,
          imageUrl:image_url,
          category,
          technologies,
          features,
          challenge,
          solution,
          results,
          projectUrl:project_url,
          createdAt:created_at
        `).order('created_at', { ascending: true }),
        supabase.from('testimonials').select(`
          id,
          quote,
          author,
          project,
          createdAt:created_at
        `).order('created_at', { ascending: true }),
        supabase.from('trusted_companies').select(`
          id,
          name,
          logoUrl:logo_url,
          websiteUrl:website_url,
          createdAt:created_at
        `).order('created_at', { ascending: true })
      ]);

      setContent({
        portfolioProjects: portfolioRes.data && portfolioRes.data.length > 0 ? portfolioRes.data as any : defaultPortfolioProjects,
        testimonials: (testimonialsRes.data as any) || [],
        trustedCompanies: (companiesRes.data as any) || []
      });
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePortfolioProjects = async (projects: PortfolioProject[]) => {
    setContent(prev => ({ ...prev, portfolioProjects: projects }));
    await fetchContent(); // Refresh from DB
  };

  const updateTestimonials = async (testimonials: Testimonial[]) => {
    setContent(prev => ({ ...prev, testimonials }));
    await fetchContent(); // Refresh from DB
  };

  const updateTrustedCompanies = async (companies: TrustedCompany[]) => {
    setContent(prev => ({ ...prev, trustedCompanies: companies }));
    await fetchContent(); // Refresh from DB
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      loading,
      updatePortfolioProjects, 
      updateTestimonials, 
      updateTrustedCompanies 
    }}>
      {children}
    </ContentContext.Provider>
  );
};
