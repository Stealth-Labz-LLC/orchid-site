import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import {
  Code2,
  Cloud,
  Database,
  Shield,
  Brain,
  Workflow,
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Award,
} from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Our Services - Enterprise Software Engineering Solutions",
  description:
    "Explore our comprehensive software engineering services. From custom development to cloud architecture, we deliver enterprise solutions that drive business growth.",
  keywords: [
    "software engineering services",
    "custom development",
    "cloud solutions",
    "enterprise software",
    "digital transformation",
    "AI solutions",
  ],
  url: "/services",
  type: "website",
});

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Build tailored solutions that perfectly fit your business needs with our expert development team.",
    features: [
      "Web Applications",
      "Mobile Apps (iOS & Android)",
      "Desktop Software",
      "Progressive Web Apps",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    description:
      "Design and implement scalable cloud infrastructure with automated deployment pipelines.",
    features: [
      "AWS / Azure / GCP",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Container Orchestration",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with modern data platforms and visualization.",
    features: [
      "Data Warehousing",
      "Business Intelligence",
      "Real-time Analytics",
      "ETL Pipelines",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Protect your applications with enterprise-grade security and compliance measures.",
    features: [
      "Security Audits",
      "Penetration Testing",
      "GDPR / SOC 2 / HIPAA",
      "Identity Management",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leverage artificial intelligence to automate processes and gain valuable insights.",
    features: [
      "ML Model Development",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    icon: Workflow,
    title: "Digital Transformation",
    description:
      "End-to-end modernization of legacy systems and business process automation.",
    features: [
      "Legacy Modernization",
      "Process Automation",
      "System Integration",
      "Change Management",
    ],
  },
];

const benefits = [
  {
    icon: Users,
    title: "Senior-Only Teams",
    description: "Every engineer has 5+ years of experience delivering enterprise solutions.",
  },
  {
    icon: Clock,
    title: "Rapid Delivery",
    description: "Agile methodology with weekly releases and continuous value delivery.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and code review processes ensure production-ready code.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Comprehensive{" "}
              <span className="text-blue-600">Technology Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              From concept to deployment, we provide end-to-end software engineering
              services that help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Orchid Advantage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver
              solutions that create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white border border-slate-200 rounded-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              How We Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understand your goals, challenges, and requirements" },
                { step: "02", title: "Strategy", description: "Design architecture and create detailed roadmap" },
                { step: "03", title: "Development", description: "Build with agile sprints and continuous feedback" },
                { step: "04", title: "Delivery", description: "Deploy, monitor, and provide ongoing support" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Technologies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Our Technology Stack
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React", "Next.js", "TypeScript", "Node.js",
                "Python", "Go", "AWS", "Azure",
                "Docker", "Kubernetes", "PostgreSQL", "MongoDB",
                "GraphQL", "Redis", "Terraform", "TensorFlow",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border border-slate-200 rounded-lg text-center text-slate-700 font-medium hover:border-blue-300 hover:text-blue-600 transition-colors duration-200"
                >
                  {tech}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let&apos;s discuss how we can help you achieve your technology goals
              with our comprehensive engineering services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/softwareorchid/tech-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
