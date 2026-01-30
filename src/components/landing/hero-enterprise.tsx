"use client";

import Link from "next/link";
import { Shield, Users, Check, StarIcon } from "lucide-react";

const trustBadges = [
  { icon: Check, label: "10+ years experience" },
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Users, label: "500+ Clients" },
  { icon: StarIcon, label: "4.4/5 average rating" },
];

export function HeroEnterprise() {
  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Enterprise Software Solutions{" "}
            <span className="text-blue-600">That Scale</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with Orchid Software to build secure, scalable applications
            that drive business transformation. From strategy to deployment,
            we deliver results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/softwareorchid/tech-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-slate-500"
              >
                <badge.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
