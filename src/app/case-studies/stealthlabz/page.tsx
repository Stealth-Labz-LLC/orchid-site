import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Stealth Labz Case Study - Data Platform | Orchid Software",
  description:
    "How Orchid Software built a high-performance data platform for Stealth Labz to capture and monetize anonymous affiliate traffic with real-time identity resolution.",
};

export default function StealthLabzCaseStudy() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/client-company/stealth-black.png"
                  alt="Stealth Labz"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                />
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/20 rounded-full">
                  Affiliate Marketing
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Real-Time Data Platform for Affiliate Networks
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Stealth Labz needed a powerful platform to help affiliate networks capture,
                enrich, and monetize anonymous traffic flowing through their systems with
                lightning-fast identity resolution.
              </p>

              <a
                href="https://portal.stealthlabz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-500 transition-colors"
              >
                Visit Stealth Portal
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">&lt;100ms</p>
                <p className="text-slate-400">Response Time</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">90+</p>
                <p className="text-slate-400">Data Points</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">15+</p>
                <p className="text-slate-400">Matching Rules</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">10+</p>
                <p className="text-slate-400">Platform Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Stealth Labz identified a critical gap in the affiliate marketing industry:
              networks were facilitating transactions without capturing the valuable identity
              data flowing through their systems. Every click represented an opportunity
              being lost.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              They needed a platform that could process webhooks in real-time, resolve
              anonymous identities, build audience segments, and ensure full TCPA/CCPA
              compliance with audit trails.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solution</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We architected and built a high-performance data platform with the following
              core capabilities:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Identity Resolution Engine",
                  description:
                    "Matches anonymous events to unified profiles using email, phone, or session identifiers in real-time.",
                },
                {
                  title: "Advanced Audience Builder",
                  description:
                    "Segments traffic using 15+ matching rules based on offers, geography, sub-parameters, and categories.",
                },
                {
                  title: "Data Enrichment Pipeline",
                  description:
                    "Appends 90+ data points including demographics, income status, job titles, and behavioral signals.",
                },
                {
                  title: "Smart Lead Routing",
                  description:
                    "Directs qualified leads to multiple destinations based on custom criteria and business rules.",
                },
                {
                  title: "Compliance Management",
                  description:
                    "Built-in TCPA/CCPA consent tracking with complete audit trails for regulatory compliance.",
                },
                {
                  title: "Native Platform Integrations",
                  description:
                    "Seamless connections with Everflow, CAKE, Tune, Trackdesk, and 10+ other affiliate platforms.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "Redis",
                "Webhooks",
                "AWS Lambda",
                "API Gateway",
                "React",
                "Tailwind CSS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">The Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-white mb-2">&lt;100ms</p>
                <p className="text-purple-100">Webhook Response Time</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">90+</p>
                <p className="text-purple-100">Data Enrichment Points</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">100%</p>
                <p className="text-purple-100">Compliance Coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Build Your Data Platform?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let&apos;s discuss how we can help you capture and monetize your data.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
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
