"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import {
  Check,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const pricingPlans = [
  {
    name: "Startup",
    description: "Perfect for early-stage companies building their first product",
    price: "$1,000",
    period: "/month",
    features: [
      "Up to 40 development hours",
      "Single project focus",
      "Weekly progress updates",
      "Standard support (9-5)",
      "Code repository access",
      "Monthly progress reports",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact#contact-form",
    popular: false,
  },
  {
    name: "Growth",
    description: "Ideal for scaling companies with multiple initiatives",
    price: "$4,000",
    period: "/month",
    features: [
      "Up to 160 development hours",
      "Multiple concurrent projects",
      "Dedicated project manager",
      "Priority support (24/7)",
      "API development & integration",
      "Performance optimization",
      "Technical documentation",
      "Agile project management",
    ],
    ctaText: "Get Started",
    ctaLink: "/contact#contact-form",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for large organizations with complex needs",
    price: "Custom",
    period: "",
    features: [
      "Unlimited development hours",
      "Full team augmentation",
      "Executive stakeholder reviews",
      "SLA-backed support",
      "Dedicated account manager",
      "On-site collaboration available",
      "Security audits & compliance",
      "Legacy system migration",
    ],
    ctaText: "Contact Sales",
    ctaLink: "/contact#contact-form",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the monthly retainer work?",
    answer:
      "Our monthly retainer provides a set number of development hours each month. You can use these hours flexibly across different projects. Unused hours do not roll over, but you can adjust your plan as needed.",
  },
  {
    question: "Can I change my plan at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan with 30 days notice. We&apos;ll prorate any differences and ensure a smooth transition between service levels.",
  },
  {
    question: "What happens if I need more hours than my plan includes?",
    answer:
      "Additional hours can be purchased at our standard hourly rate. For Growth and Enterprise clients, we offer discounted rates for overflow hours.",
  },
  {
    question: "Do you offer custom project-based pricing?",
    answer:
      "Yes, for specific projects with defined scope and timeline, we can provide fixed-price quotes. Contact us to discuss your project requirements.",
  },
  {
    question: "What is included in priority support?",
    answer:
      "Priority support includes 24/7 availability, dedicated Slack channel, guaranteed response times (under 2 hours), and direct access to senior engineers for critical issues.",
  },
  {
    question: "Is there a minimum contract term?",
    answer:
      "Our Startup plan is month-to-month. Growth and Enterprise plans have a minimum 3-month commitment to ensure we can deliver meaningful results.",
  },
];

const comparisonFeatures = [
  { name: "Development Hours", startup: "40 hrs/month", growth: "160 hrs/month", enterprise: "Unlimited" },
  { name: "Concurrent Projects", startup: "1", growth: "Multiple", enterprise: "Unlimited" },
  { name: "Project Manager", startup: "Shared", growth: "Dedicated", enterprise: "Dedicated" },
  { name: "Support Level", startup: "Standard (9-5)", growth: "Priority (24/7)", enterprise: "SLA-backed" },
  { name: "Code Reviews", startup: "Basic", growth: "Comprehensive", enterprise: "Comprehensive" },
  { name: "Architecture Consulting", startup: "-", growth: "Included", enterprise: "Included" },
  { name: "Security Audits", startup: "-", growth: "Annual", enterprise: "Quarterly" },
  { name: "On-site Collaboration", startup: "-", growth: "-", enterprise: "Available" },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Flexible Plans for{" "}
              <span className="text-blue-600">Every Stage</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Choose a plan that fits your business needs. All plans include
              our commitment to quality and on-time delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-xl border-2 transition-all duration-200 ${
                  plan.popular
                    ? "border-blue-500 bg-blue-50/30 shadow-xl"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-500 ml-1">{plan.period}</span>
                  )}
                </div>

                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 mb-8 ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {plan.ctaText}
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-10">
            All plans include secure code management, regular communication, and quality assurance.
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-slate-600">
              See what&apos;s included in each plan
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Startup</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4 px-4 text-slate-700">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-slate-600">{feature.startup}</td>
                    <td className="py-4 px-4 text-center text-slate-900 font-medium bg-blue-50/50">{feature.growth}</td>
                    <td className="py-4 px-4 text-center text-slate-600">{feature.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                FAQ
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Not Sure Which Plan Is Right for You?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Schedule a free consultation and we&apos;ll help you find the perfect
              solution for your needs.
            </p>
            <Link
              href="/contact#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
