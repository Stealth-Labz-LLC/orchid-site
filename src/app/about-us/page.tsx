import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import {
  Target,
  Lightbulb,
  Heart,
  Award,
  Users,
  Globe,
  Clock,
  Shield,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "About Us - Enterprise Software Solutions Partner",
  description:
    "Learn about Orchid Software's mission to deliver enterprise-grade software solutions. Meet our team of expert engineers and discover the values that drive us.",
  keywords: [
    "about orchid software",
    "enterprise software company",
    "software engineering team",
    "company mission",
    "software development partner",
  ],
  url: "/about-us",
  type: "website",
});

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every interaction, building trust through consistent ethical practices.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, delivering solutions that exceed expectations and drive measurable results.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work as an extension of your team, fostering open communication and shared ownership of success.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "We continuously explore emerging technologies and methodologies to deliver cutting-edge solutions.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "50+", label: "Expert Engineers" },
];

const milestones = [
  { year: "2014", title: "Founded", description: "Orchid Software was established with a vision to transform enterprise software development." },
  { year: "2017", title: "Global Expansion", description: "Expanded operations to serve clients across North America, Europe, and Asia." },
  { year: "2020", title: "Cloud Excellence", description: "Achieved AWS Advanced Partner status and SOC 2 Type II certification." },
  { year: "2023", title: "AI Integration", description: "Launched dedicated AI/ML practice to help clients leverage intelligent automation." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              About Orchid Software
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Building the Future of{" "}
              <span className="text-blue-600">Enterprise Software</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate engineers, architects, and strategists
              dedicated to transforming businesses through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Commitment Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower enterprises with cutting-edge software solutions that accelerate
                growth, enhance productivity, and create lasting competitive advantages.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted technology partner for enterprises seeking to innovate
                and transform their operations through software excellence.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Commitment</h3>
              <p className="text-slate-600 leading-relaxed">
                We are committed to delivering excellence, fostering innovation, and building
                long-term partnerships with our clients based on trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              The Principles That Guide Us
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                  </div>
                  <div className="relative pb-8">
                    <div className="absolute left-0 top-2 w-3 h-3 bg-blue-600 rounded-full" />
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-1.5 top-5 w-px h-full bg-slate-300" />
                    )}
                    <div className="pl-8">
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Global Presence
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Serving Clients Worldwide
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With teams across multiple time zones, we provide round-the-clock support
                and seamless collaboration for our global client base.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Operations in 3 continents</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">24/7 support coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Multilingual team members</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-8 text-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-3xl font-bold text-slate-900 mb-1">20+</p>
                  <p className="text-sm text-slate-600">Countries Served</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-3xl font-bold text-slate-900 mb-1">5</p>
                  <p className="text-sm text-slate-600">Office Locations</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-3xl font-bold text-slate-900 mb-1">8</p>
                  <p className="text-sm text-slate-600">Languages Supported</p>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <p className="text-3xl font-bold text-slate-900 mb-1">24/7</p>
                  <p className="text-sm text-slate-600">Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let&apos;s discuss how we can help transform your business through
              innovative software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
