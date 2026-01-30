import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ArrowLeft, ExternalLink, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Shiksha Case Study - School Management System | Orchid Software",
  description:
    "How Orchid Software built a comprehensive cloud-based school management platform serving educational institutions from 100 to 10,000+ students.",
};

export default function ShikshaCaseStudy() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-transparent" />

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
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Image
                    src="/images/logo/orchid_logo_new.svg"
                    alt="Shiksha"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-500/20 rounded-full">
                  Education
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive School Management System
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Shiksha is a cloud-based school management platform designed to digitize
                administrative operations for educational institutions of all sizes,
                from 100 to 10,000+ students.
              </p>

              <a
                href="https://shiksha.orchidsw.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
              >
                Visit Shiksha
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">80%</p>
                <p className="text-slate-400">Less Paperwork</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">99.9%</p>
                <p className="text-slate-400">Uptime</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">&lt;2s</p>
                <p className="text-slate-400">Response Time</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <p className="text-4xl font-bold text-white mb-2">8+</p>
                <p className="text-slate-400">Core Modules</p>
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
              Educational institutions across India were struggling with paper-based
              administrative processes. Manual attendance tracking, fee collection,
              examination management, and parent communication were time-consuming
              and error-prone.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Schools needed a comprehensive digital solution that could scale from
              small institutions to large school networks, while remaining affordable
              and easy to use for non-technical staff.
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
              We designed and built Shiksha with eight comprehensive modules to address
              every aspect of school administration:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Student Management",
                  description:
                    "Complete student profiles, admission tracking, academic records, and document management in one centralized system.",
                },
                {
                  title: "Attendance Tracking",
                  description:
                    "Real-time attendance analytics with automated notifications to parents for absences and late arrivals.",
                },
                {
                  title: "Fee Management",
                  description:
                    "Flexible fee structures, automated invoicing, multiple payment modes, and comprehensive financial reporting.",
                },
                {
                  title: "Examination System",
                  description:
                    "Automated report card generation, grade calculations, and performance analytics with historical tracking.",
                },
                {
                  title: "WhatsApp Integration",
                  description:
                    "Bulk messaging, group communication, and instant notifications to parents through WhatsApp API.",
                },
                {
                  title: "Enterprise Security",
                  description:
                    "End-to-end encryption, role-based access control, daily backups, and GDPR-compliant data handling.",
                },
                {
                  title: "Real-time Dashboard",
                  description:
                    "Comprehensive analytics dashboard with key metrics for administrators, teachers, and management.",
                },
                {
                  title: "Mobile-Responsive Design",
                  description:
                    "Full functionality on any device, allowing teachers and parents to access the system from anywhere.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-green-600" />
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
                "React",
                "Node.js",
                "TypeScript",
                "PostgreSQL",
                "WhatsApp API",
                "AWS",
                "Razorpay",
                "Tailwind CSS",
                "Docker",
                "Redis",
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
      <section className="py-16 md:py-24 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">The Results</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-bold text-white mb-2">80%</p>
                <p className="text-green-100">Reduction in Paperwork</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">99.9%</p>
                <p className="text-green-100">Platform Uptime</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-white mb-2">10K+</p>
                <p className="text-green-100">Students Managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl font-medium text-slate-900 mb-6">
              &quot;Shiksha transformed how we manage our school. What used to take hours
              of paperwork now happens in minutes. Parents love the instant updates
              through WhatsApp.&quot;
            </blockquote>
            <div>
              <p className="font-semibold text-slate-900">School Administrator</p>
              <p className="text-slate-500">Private School, Bihar</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Ready to Digitize Your Institution?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Let&apos;s discuss how we can help you build a custom management solution.
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
