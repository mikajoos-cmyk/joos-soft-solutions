import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
};

export const SEO = ({ title, description, keywords, ogImage }: SEOProps) => {
  const fullTitle = `${title} | Joos Soft Solutions`;
  const defaultImage = "https://c.animaapp.com/mlmelhdkAuv6uy/assets/vip_haustechnik.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
    </Helmet>
  );
};
