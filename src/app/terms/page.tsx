import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Orchid Software",
  description:
    "Read our terms of service to understand the rules and regulations governing the use of Orchid Software's services under Indian law.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <FileText className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Legal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-600">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="prose prose-slate max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  1. Introduction and Acceptance
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement
                  between you and Orchid Software, a company registered and operating in India
                  with its principal place of business at E47 Chhipura, Near DAV Mode, Parsa
                  Bazar, Patna, Bihar, India.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms
                  in accordance with the Indian Contract Act, 1872. If you do not agree to
                  these Terms, please do not use our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Definitions
                </h2>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li><strong>&quot;Services&quot;</strong> refers to software development, consulting,
                  and related services provided by Orchid Software</li>
                  <li><strong>&quot;Client&quot;</strong> or <strong>&quot;You&quot;</strong> refers to any individual
                  or entity using our services</li>
                  <li><strong>&quot;Deliverables&quot;</strong> refers to any software, code, documentation,
                  or materials produced under our engagement</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Services and Scope
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Orchid Software provides custom software development, cloud architecture,
                  data analytics, AI/ML solutions, and related technology consulting services.
                  The specific scope of work for each engagement shall be defined in a
                  separate Statement of Work (SOW) or Service Agreement.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any aspect of
                  our services with reasonable notice to affected clients.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Client Obligations
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Provide accurate and complete information required for service delivery</li>
                  <li>Make timely payments as per agreed terms</li>
                  <li>Respond to queries and provide feedback within reasonable timeframes</li>
                  <li>Not use our services for any unlawful purpose or in violation of Indian law</li>
                  <li>Maintain confidentiality of any proprietary information shared with you</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Intellectual Property Rights
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unless otherwise specified in a separate agreement:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>All pre-existing intellectual property remains with its original owner</li>
                  <li>Custom deliverables created for the client shall be owned by the client
                  upon full payment</li>
                  <li>We retain rights to general knowledge, tools, and methodologies developed
                  during the engagement</li>
                  <li>Open-source components shall remain subject to their respective licenses</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Our intellectual property is protected under the Copyright Act, 1957,
                  the Patents Act, 1970, and the Trade Marks Act, 1999.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Payment Terms
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Payment terms shall be as specified in the applicable SOW or Service Agreement.
                  General terms include:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>All payments shall be made in Indian Rupees (INR) unless otherwise agreed</li>
                  <li>Payments are subject to applicable GST and other taxes as per Indian tax laws</li>
                  <li>Invoices are due within 15 days of issuance unless otherwise specified</li>
                  <li>Late payments may attract interest at 18% per annum</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  We accept payments via bank transfer (NEFT/RTGS/IMPS), UPI, and other
                  approved payment methods.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Confidentiality
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Both parties agree to maintain strict confidentiality of all proprietary
                  information, trade secrets, and business information shared during the
                  engagement. This obligation shall survive the termination of services
                  for a period of three (3) years.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  To the maximum extent permitted by Indian law:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>Our total liability shall not exceed the fees paid for the specific
                  service giving rise to the claim</li>
                  <li>We shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages</li>
                  <li>We are not liable for delays or failures due to Force Majeure events</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Nothing in these Terms excludes liability that cannot be excluded under
                  applicable Indian law.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  9. Termination
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Either party may terminate services:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>With 30 days written notice for convenience</li>
                  <li>Immediately upon material breach by the other party</li>
                  <li>Immediately if the other party becomes insolvent or enters bankruptcy proceedings</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  10. Dispute Resolution
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  In case of any disputes arising from these Terms:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Parties shall first attempt to resolve disputes through good-faith negotiations</li>
                  <li>If unresolved within 30 days, disputes shall be referred to arbitration
                  under the Arbitration and Conciliation Act, 1996</li>
                  <li>Arbitration shall be conducted in Patna, Bihar in English language</li>
                  <li>The arbitral award shall be final and binding</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  11. Governing Law and Jurisdiction
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the
                  laws of India. Subject to the arbitration clause above, the courts at
                  Patna, Bihar shall have exclusive jurisdiction over any matters arising
                  from these Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  12. Amendments
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Material changes
                  will be communicated with at least 30 days notice. Continued use of our
                  services after such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  13. Severability
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable
                  under Indian law, the remaining provisions shall continue in full force
                  and effect.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  For any questions regarding these Terms, please contact us at:
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li>
                    <strong>Email:</strong> info@orchidsw.com
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 9079 00 3238
                  </li>
                  <li>
                    <strong>Address:</strong> E47 Chhipura, Near DAV Mode, Parsa Bazar, Patna, Bihar, India
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
