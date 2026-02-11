import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    industry: "MarTech",
    metric: "32% More Conversions",
    title: "TrafficAi - AI Visitor Identification",
    description:
      "Built an AI-powered platform that identifies anonymous website visitors, revealing buying intent and transforming unknown traffic into actionable sales leads.",
    href: "/case-studies/trafficai",
    slug: "trafficai",
  },
  {
    industry: "Education",
    metric: "80% Less Paperwork",
    title: "Shiksha - School Management System",
    description:
      "Created a comprehensive cloud-based school management platform serving institutions with 100 to 10,000+ students, achieving 99.9% uptime.",
    href: "/case-studies/shiksha",
    slug: "shiksha",
  },
];

export function CaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Case Studies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 md:mb-0">
              Proven Results Across Industries
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={study.href}
              className="group p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              {/* Industry Tag */}
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full mb-4">
                {study.industry}
              </span>

              {/* Metric */}
              <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                {study.metric}
              </p>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {study.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Read Case Study
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
