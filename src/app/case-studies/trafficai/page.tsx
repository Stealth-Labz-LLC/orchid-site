import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "TrafficAi Case Study - AI Visitor Identification | Orchid Software",
  description:
    "How Orchid Software built an AI-powered platform for TrafficAi that identifies anonymous website visitors and transforms them into actionable sales leads.",
};

export default function TrafficAiCaseStudy() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />

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
                  src="/images/client-company/trafficai.webp"
                  alt="TrafficAi"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/20 rounded-full">
                  MarTech
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Visitor Identification Platform
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                TrafficAi needed a sophisticated platform to help businesses identify
                anonymous website visitors and transform unknown traffic into qualified
                sales leads with real-time intent scoring.
              </p>

              <a
                href="https://www.trafficai.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
              >
                Visit TrafficAi
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">32%</p>
                <p className="text-slate-400">Conversion Increase</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">48%</p>
                <p className="text-slate-400">Email List Growth</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">Real-time</p>
                <p className="text-slate-400">Intent Scoring</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">5+</p>
                <p className="text-slate-400">CRM Integrations</p>
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
              TrafficAi approached us with a vision to solve a fundamental marketing
              challenge: the &quot;silent drain&quot; of anonymous website traffic. Most
              businesses lose 98% of their website visitors without ever knowing who
              they were or what they were looking for.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              They needed a platform that could identify these anonymous visitors,
              understand their buying intent, and provide actionable data for sales
              teams to engage with personalized outreach.
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
              We built a comprehensive AI-powered SaaS platform with the following
              key capabilities:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Visitor Identification Engine",
                  description:
                    "Advanced algorithms that resolve anonymous traffic into verified identities with contact and company data.",
                },
                {
                  title: "Intent Analysis & Scoring",
                  description:
                    "Behavioral tracking system that reveals real-time buying intent with intelligent scoring mechanisms.",
                },
                {
                  title: "Lead Enrichment Pipeline",
                  description:
                    "Automatic enrichment of prospects with verified emails, LinkedIn data, and engagement insights.",
                },
                {
                  title: "Multi-Channel Activation",
                  description:
                    "Seamless outreach capabilities via email, social media, and direct channels.",
                },
                {
                  title: "CRM Integration Hub",
                  description:
                    "Native integrations with popular sales tools including Salesforce, HubSpot, and Pipedrive.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-blue-600" />
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
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "TensorFlow",
                "PostgreSQL",
                "Redis",
                "AWS",
                "Stripe",
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
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">The Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-white mb-2">32%</p>
                <p className="text-blue-100">Increase in Conversion Rates</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">48%</p>
                <p className="text-blue-100">Email List Growth</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">80%</p>
                <p className="text-blue-100">Reduction in Manual Review</p>
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
              Ready to Build Your Platform?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let&apos;s discuss how we can help you create a powerful SaaS solution.
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
