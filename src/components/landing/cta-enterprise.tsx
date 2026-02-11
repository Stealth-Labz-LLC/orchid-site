import Link from "next/link";
import { Phone } from "lucide-react";

export function CTAEnterprise() {
  return (
    <section className="py-16 md:py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Business?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve your technology goals.
            Schedule a free consultation with our experts today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>

          {/* Phone Number */}
          <div className="flex items-center justify-center gap-2 text-blue-100">
            <Phone className="w-5 h-5" />
            <span className="text-sm">
              Or call us directly:{" "}
              <a
                href="tel:+919153733160"
                className="font-semibold text-white hover:underline"
              >
                +91 9153 73 3160
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
