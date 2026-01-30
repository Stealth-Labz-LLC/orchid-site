import Link from "next/link";
import {
  Code2,
  Cloud,
  BarChart3,
  Brain,
  ShieldCheck,
  Workflow,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Bespoke applications tailored to your unique business requirements and workflows.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Scalable cloud infrastructure with automated deployment pipelines and monitoring.",
    href: "/services",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with modern data platforms and visualization.",
    href: "/services",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge AI to automate and optimize operations.",
    href: "/services",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security assessments, penetration testing, and compliance frameworks.",
    href: "/services",
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems and business process automation.",
    href: "/services",
  },
];

export function ServicesEnterprise() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Comprehensive Technology Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From concept to deployment, we offer a full spectrum of services
            to accelerate your digital initiatives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-200">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
