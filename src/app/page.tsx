import { Header } from "@/components/landing/header";
import { HeroEnterprise } from "@/components/landing/hero-enterprise";
import { ClientsEnterprise } from "@/components/landing/clients-enterprise";
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
  title: "Orchid Software - Enterprise Software Solutions | Digital Transformation",
  description:
    "Partner with Orchid Software to build secure, scalable enterprise applications. Custom software development, cloud architecture, AI solutions, and digital transformation services.",
  keywords: [
    "enterprise software solutions",
    "custom software development",
    "digital transformation",
    "cloud architecture",
    "AI solutions",
    "software development company",
    "enterprise applications",
    "business transformation",
  ],
  url: "/",
  type: "website",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroEnterprise />
      <ClientsEnterprise />
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
