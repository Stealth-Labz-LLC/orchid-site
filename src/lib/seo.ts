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

// Default OG images from local public/images folder
export const ogImages = {
  default: "/images/common/common-og.jpeg",
  home: "/images/home/1.webp",
  services: "/images/services/service-og.webp",
  about: "/images/about/about-og.jpeg",
  contact: "/images/contact/contact-og.jpeg",
  pricing: "/images/common/common-og.jpeg",
  blog: "/images/blog/blog-og.jpeg",
  caseStudies: "/images/common/common-og.jpeg",
};

const defaultKeywords = [
  "software engineering",
  "SaaS solutions",
  "custom software development",
  "enterprise software",
  "cloud solutions",
  "software development company",
  "Orchid Software",
  "web development India",
  "mobile app development",
  "IT consulting services",
  "digital transformation",
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

// Local Business Schema for better local SEO
export function generateLocalBusinessSchema(): object {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orchidsw.com";
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Orchid Software",
    image: `${siteUrl}/images/logo/orchid_logo_new.svg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+91-9079003238",
    email: "info@orchidsw.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E47 Chhipura, Near DAV Mode",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.6093,
      longitude: 85.1376,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/orchid-software",
      "https://www.facebook.com/orchidsw",
      "https://t.me/orchid_software",
    ],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 25.6093,
        longitude: 85.1376,
      },
      geoRadius: "50000",
    },
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
  };
}

// Service Schema for service pages
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}): object {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://orchidsw.com";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: service.provider || "Orchid Software",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Software Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Architecture & DevOps",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Machine Learning Solutions",
          },
        },
      ],
    },
  };
}

// FAQ Schema for FAQ sections
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Software Application Schema for case studies
export function generateSoftwareSchema(software: {
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem?: string;
}): object {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: software.name,
    description: software.description,
    url: software.url,
    applicationCategory: software.applicationCategory,
    operatingSystem: software.operatingSystem || "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}
