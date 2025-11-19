import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
}

const defaultKeywords = [
  "software engineering",
  "SaaS solutions",
  "custom software development",
  "enterprise software",
  "cloud solutions",
  "software development company",
  "Orchid Software",
];

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = defaultKeywords,
    image = "/images/og-image.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    authors,
    noindex = false,
  } = config;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Orchid Software",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@OrchidSoftware",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

export interface OrganizationSchema {
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs?: string[];
}

export function generateOrganizationSchema(
  config: OrganizationSchema
): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    description: config.description,
    url: config.url,
    logo: config.logo,
    ...(config.contactPoint && {
      contactPoint: {
        "@type": "ContactPoint",
        telephone: config.contactPoint.telephone,
        contactType: config.contactPoint.contactType,
        email: config.contactPoint.email,
      },
    }),
    ...(config.sameAs && { sameAs: config.sameAs }),
  };
}

export function generateWebsiteSchema(url: string, name: string): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Orchid Software",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo/favicon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}
