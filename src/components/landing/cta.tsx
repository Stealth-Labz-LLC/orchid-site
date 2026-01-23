"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { DemoRequestModal } from "@/components/modals/demo-request-modal";

export function CTA() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-slate-900 px-8 py-16 text-center md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Transform your ideas into powerful software solutions.
            Start your free trial or schedule a demo with our team.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-8"
              asChild
            >
              <Link href="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 bg-transparent text-white hover:bg-slate-800 font-semibold h-12 px-8"
              onClick={() => setShowDemoModal(true)}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
      <DemoRequestModal open={showDemoModal} onOpenChange={setShowDemoModal} />
    </section>
  );
}
