import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  jsonLd?: Record<string, any>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterHandle = '@technospyre',
  jsonLd,
}) => {
  const siteTitle = 'TechnoSpyre | Empowering Your Digital Future';
  const defaultDescription = 'TechnoSpyre Inc. — We engineer, scale, and manage resilient technology ecosystems that empower modern businesses to operate securely and efficiently with next-gen AI and cloud infrastructure.';
  const defaultKeywords = 'TechnoSpyre, Next-Gen Technology, Cloud Infrastructure, Intelligence Systems, AI, Software Engineering, Enterprise Solutions, Cybersecurity, Academy, IT Training';
  
  const fullTitle = title ? `${title} | TechnoSpyre` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;
  const url = canonical || 'https://technospyre.io';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
