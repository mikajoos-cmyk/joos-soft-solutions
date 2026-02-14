import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
};

export const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
  const fullTitle = `${title} | Joos Soft Solutions`;
  const defaultImage = "https://www.joos-soft-solutions.de/og-image.jpg";
  const baseUrl = "https://www.joos-soft-solutions.de";
  const canonicalUrl = canonical || `${baseUrl}${window.location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:locale" content="de_DE" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="German" />
      <meta name="geo.region" content="DE-BW" />
      <meta name="geo.placename" content="Dettingen" />
      <meta name="geo.position" content="48.5333;9.3333" />
      <meta name="ICBM" content="48.5333, 9.3333" />
    </Helmet>
  );
};
