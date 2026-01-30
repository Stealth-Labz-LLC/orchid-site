import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Startup",
    price: "$1,000",
    period: "/month",
    description: "Perfect for early-stage companies building their first product.",
    features: [
      "Up to 40 development hours",
      "Single project focus",
      "Weekly progress updates",
      "Standard support (9-5)",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$4,000",
    period: "/month",
    description: "Ideal for scaling companies with multiple initiatives.",
    features: [
      "Up to 160 development hours",
      "Multiple concurrent projects",
      "Dedicated project manager",
      "Priority support (24/7)",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Unlimited development hours",
      "Full team augmentation",
      "Executive stakeholder reviews",
      "SLA-backed support",
    ],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Flexible Plans for Every Stage
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your business needs. All plans include
            our commitment to quality and on-time delivery.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl border-2 transition-all duration-200 ${
                tier.popular
                  ? "border-blue-500 bg-blue-50/50 shadow-lg"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-full">
                  Most Popular
                </span>
              )}

              {/* Tier Name */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline mb-3">
                <span className="text-3xl md:text-4xl font-bold text-slate-900">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-slate-500 ml-1">{tier.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View Full Pricing Details
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
