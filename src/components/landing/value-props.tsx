import { Award, Shield, TrendingUp, Headphones } from "lucide-react";

const valueProps = [
  {
    icon: Award,
    title: "Proven Expertise",
    description:
      "Over 10 years of experience delivering enterprise-grade solutions for Fortune 500 companies and ambitious startups alike.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "SOC 2, GDPR, and HIPAA compliant. We build security into every layer of your application from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Architecture designed to grow with your business. From startup to enterprise scale without rebuilding.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "24/7 expert assistance with dedicated account managers ensuring your systems run smoothly around the clock.",
  },
];

export function ValueProps() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Choose Orchid Software?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine technical excellence with business acumen to deliver
            solutions that create lasting value.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <prop.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
