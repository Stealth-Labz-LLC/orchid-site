import { Header } from "@/components/landing/header";
import { HeroEnterprise } from "@/components/landing/hero-enterprise";
import { ValueProps } from "@/components/landing/value-props";
import { ServicesEnterprise } from "@/components/landing/services-enterprise";
import { CaseStudies } from "@/components/landing/case-studies";
import { TestimonialsEnterprise } from "@/components/landing/testimonials-enterprise";
import { PricingPreview } from "@/components/landing/pricing-preview";
import { CTAEnterprise } from "@/components/landing/cta-enterprise";
import { Footer } from "@/components/landing/footer";
import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import "../../public/css/pages/home.css";

export const metadata: Metadata = genMeta({
  title: "Orchid Software - Enterprise Software Solutions | India",
  description:
    "Partner with Orchid Software to build secure, scalable enterprise applications. Custom software development, cloud architecture, AI solutions, and digital transformation services in India.",
  keywords: [
    "enterprise software solutions",
    "custom software development India",
    "digital transformation services",
    "cloud architecture India",
    "AI solutions",
    "software development company India",
    "enterprise applications",
    "business transformation",
    "SaaS development",
    "web development Patna",
    "IT services Bihar",
  ],
  url: "/",
  type: "website",
  image: "/images/og/home-og.png",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroEnterprise />
      <ValueProps />
      <ServicesEnterprise />
      <CaseStudies />
      <TestimonialsEnterprise />
      <PricingPreview />
      <CTAEnterprise />
      <Footer />
    </main>
  );
}
