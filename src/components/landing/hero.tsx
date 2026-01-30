"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

export function Hero() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob [animation-delay:2s]" />
        <div className="absolute -bottom-40 left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob [animation-delay:3s]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-2 text-sm">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-white/80">Trusted by 500+ companies worldwide</span>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-5xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Powerful Software
          </span>{" "}
          <br className="hidden sm:block" />
          That Scales With You
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Expert software engineering services for startups and enterprises.
          From concept to deployment, we deliver scalable, secure, and innovative solutions.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 h-14 px-8 text-base"
            asChild
          >
            <Link href="/pricing">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 font-semibold h-14 px-8 text-base"
            onClick={() => setShowDemoModal(true)}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Call
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">✓</span>
            <span>500+ satisfied clients</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-blue-500">✓</span>
            <span>10+ years experience</span>
          </div>
          <div className="hidden sm:block h-4 w-px bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-blue-500">★★★★</span>
            <span>4.4/5 average rating</span>
          </div>
        </div>
      </div>

      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  );
}
