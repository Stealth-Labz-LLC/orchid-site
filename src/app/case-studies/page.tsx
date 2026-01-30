import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies - Client Success Stories | Orchid Software",
  description:
    "Explore how Orchid Software has helped businesses transform their operations with custom software solutions. Real results from real clients.",
};

const caseStudies = [
  {
    slug: "trafficai",
    company: "TrafficAi",
    industry: "MarTech",
    logo: "/images/client-company/trafficai.webp",
    metric: "32% More Conversions",
    title: "AI-Powered Visitor Identification Platform",
    summary:
      "Built an AI-powered SaaS platform that identifies anonymous website visitors, reveals buying intent, and transforms unknown traffic into actionable sales leads for marketing teams.",
    results: [
      "32% increase in conversion rates",
      "48% growth in email list",
      "Real-time intent scoring",
    ],
    technologies: ["Next.js", "AI/ML", "PostgreSQL", "Redis", "AWS"],
    website: "https://www.trafficai.io",
  },
  {
    slug: "stealthlabz",
    company: "Stealth Labz",
    industry: "Affiliate Marketing",
    logo: "/images/client-company/stealth-black.png",
    metric: "Sub-100ms Response",
    title: "Real-Time Data Platform for Affiliate Networks",
    summary:
      "Developed a high-performance data platform enabling affiliate networks to capture, enrich with 90+ data points, and monetize anonymous traffic through real-time identity resolution.",
    results: [
      "Sub-100ms webhook response time",
      "90+ data enrichment points",
      "15+ matching rules for segmentation",
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "Webhooks", "AWS"],
    website: "https://portal.stealthlabz.com",
  },
  {
    slug: "shiksha",
    company: "Shiksha",
    industry: "Education",
    logo: "/images/logo/orchid_logo_new.svg",
    metric: "80% Less Paperwork",
    title: "Comprehensive School Management System",
    summary:
      "Created a cloud-based school management platform serving institutions from 100 to 10,000+ students, with modules for attendance, fees, examinations, and WhatsApp integration.",
    results: [
      "99.9% platform uptime",
      "80% reduction in paperwork",
      "Sub-2 second response times",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "WhatsApp API", "AWS"],
    website: "https://shiksha.orchidsw.com",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Discover how we&apos;ve helped businesses across industries transform
              their operations with custom software solutions that deliver
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left - Info */}
                  <div className="p-8 md:p-10 md:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Image
                          src={study.logo}
                          alt={study.company}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {study.company}
                        </h3>
                        <span className="text-sm text-blue-600 font-medium">
                          {study.industry}
                        </span>
                      </div>
                    </div>

                    <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                      {study.metric}
                    </p>
                    <h2 className="text-xl font-semibold text-slate-800 mb-4">
                      {study.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={study.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div className="bg-slate-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-slate-200">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                      Key Results
                    </h4>
                    <ul className="space-y-4">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let&apos;s discuss how we can help transform your business with custom
              software solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
