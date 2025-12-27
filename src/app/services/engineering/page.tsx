"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Cloud,
  Database,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Mail,
  Phone,
  Rocket,
  Server,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const clients = [
  "Fortune 500 Companies",
  "Funded Startups",
  "Healthcare Systems",
  "Financial Services",
  "E-Commerce Leaders",
  "SaaS Platforms",
];

const capabilities = [
  {
    icon: Code2,
    title: "Web & Mobile Development",
    description: "React, Next.js, React Native, Flutter—modern applications built for scale.",
    technologies: ["React", "Next.js", "TypeScript", "Flutter"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "Robust backend systems with Node.js, Python, Go, and .NET architectures.",
    technologies: ["Node.js", "Python", "Go", "GraphQL"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Azure, GCP infrastructure with automated CI/CD pipelines.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Data architecture, real-time analytics, and ML pipeline integration.",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "BigQuery"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "SOC 2, HIPAA, GDPR-compliant systems with enterprise security.",
    technologies: ["OAuth 2.0", "Encryption", "Audit Logs", "RBAC"],
  },
  {
    icon: GitBranch,
    title: "Architecture & Consulting",
    description: "Technical strategy, code reviews, and system design consulting.",
    technologies: ["Microservices", "Event-Driven", "DDD", "CQRS"],
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Rocket },
  { value: "98%", label: "Client Retention", icon: TrendingUp },
  { value: "50+", label: "Senior Engineers", icon: Users },
  { value: "<24h", label: "Response Time", icon: Clock },
];

const testimonials = [
  {
    quote: "Orchid Software transformed our legacy system into a modern, scalable platform. Their engineering expertise is exceptional.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc.",
    rating: 5,
  },
  {
    quote: "The team delivered our MVP in half the expected time without compromising quality. Highly recommended for startups.",
    author: "Michael Roberts",
    role: "Founder",
    company: "DataSync",
    rating: 5,
  },
  {
    quote: "Their DevOps expertise helped us achieve 99.99% uptime. Professional, reliable, and technically brilliant.",
    author: "Jennifer Walsh",
    role: "VP Engineering",
    company: "CloudBase",
    rating: 5,
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Senior-Only Teams",
    description: "Every engineer has 5+ years of experience. No juniors learning on your project.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "We measure success by your business metrics, not just code delivered.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Start within 48 hours. Weekly releases. Continuous value delivery.",
  },
  {
    icon: Lock,
    title: "IP Protection",
    description: "Full code ownership. NDA-protected. Enterprise-grade security practices.",
  },
];

export default function EngineeringPrelanderPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/orhcid_logo_black_font.svg"
              alt="Orchid Software"
              width={140}
              height={40}
              className="h-10 w-auto dark:invert"
              priority
            />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="tel:+1234567890"
              className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>Talk to us</span>
            </Link>
            <Button
              onClick={() => setShowDemoModal(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.15),transparent)]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            {/* Trust Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/50 dark:text-orange-400">
              <BadgeCheck className="h-4 w-4" />
              <span>Trusted by 500+ Companies Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Enterprise Software
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
                Engineering Excellence
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl">
              Partner with senior engineers who build scalable, secure software solutions.
              From architecture to deployment—we deliver results that drive growth.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Button
                size="lg"
                onClick={() => setShowDemoModal(true)}
                className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos / Social Proof Bar */}
      <section className="border-y border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 py-8">
          <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clients.map((client) => (
              <div
                key={client}
                className="text-sm font-semibold text-slate-400 dark:text-slate-500"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950/50">
                <stat.icon className="h-6 w-6 text-orange-600 dark:text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="bg-slate-900 py-16 text-white md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Companies Choose Orchid
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              We&apos;re not another dev shop. We&apos;re your strategic engineering partner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-orange-500/50 hover:bg-slate-800"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700 dark:border-orange-900/50 dark:bg-orange-950/50 dark:text-orange-400">
            <Layers className="h-4 w-4" />
            <span>Full-Stack Expertise</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            End-to-End Engineering Capabilities
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From concept to deployment, we cover every layer of your technology stack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-orange-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-900"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/20">
                <capability.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                {capability.title}
              </h3>
              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                {capability.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {capability.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/50 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Trusted by Engineering Leaders
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              See what CTOs and founders say about working with us.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mb-6 text-slate-700 dark:text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Simple Engagement Process
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From first call to project kickoff in less than a week.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-orange-500 via-orange-500 to-transparent md:block" />

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  description: "30-minute call to understand your project, goals, and technical requirements.",
                  time: "Day 1",
                },
                {
                  step: "02",
                  title: "Technical Proposal",
                  description: "Detailed architecture recommendation, team composition, and transparent pricing.",
                  time: "Day 2-3",
                },
                {
                  step: "03",
                  title: "Team Kickoff",
                  description: "Meet your dedicated engineering team and align on processes and communication.",
                  time: "Day 4-5",
                },
                {
                  step: "04",
                  title: "Development Begins",
                  description: "Agile sprints with weekly demos. You see progress from day one.",
                  time: "Week 1",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex gap-6">
                  <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-xl font-bold text-white shadow-lg shadow-orange-500/25">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-950 dark:text-orange-400">
                        {item.time}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
              <Calendar className="h-4 w-4" />
              <span>Limited Availability</span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Build Something
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
              Schedule a free consultation with our engineering team.
              Get expert advice and a custom proposal within 48 hours.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => setShowDemoModal(true)}
                className="h-14 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-lg font-semibold shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 transition-all"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 border-2 border-slate-600 bg-transparent px-8 text-lg font-semibold text-white hover:border-white hover:bg-white/5 transition-all"
                asChild
              >
                <Link href="mailto:hello@orchidsw.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us Directly
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>NDA available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Transparent pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo/orhcid_logo_black_font.svg"
                  alt="Orchid Software"
                  width={120}
                  height={35}
                  className="h-8 w-auto dark:invert"
                />
              </Link>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                &copy; {new Date().getFullYear()} Orchid Software. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
              <a
                href="https://orchidsw.com"
                className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Globe className="h-4 w-4" />
                orchidsw.com
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </main>
  );
}
