import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Orchid Software",
  description:
    "Learn how Orchid Software collects, uses, and protects your personal information in compliance with Indian data protection laws.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Privacy & Security</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Privacy Policy
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Orchid Software (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a company registered and
                  operating in India. We are committed to protecting your privacy and handling
                  your personal data in compliance with the Information Technology Act, 2000,
                  the Information Technology (Reasonable Security Practices and Procedures and
                  Sensitive Personal Data or Information) Rules, 2011, and other applicable
                  Indian data protection regulations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you use our services. Please read this policy carefully.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Personal Information
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and designation</li>
                  <li>Billing and payment information (processed securely through authorized payment gateways)</li>
                  <li>Account credentials</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Sensitive Personal Data or Information (SPDI)
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  As per Indian IT Rules, we may collect SPDI only with your explicit consent:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>Financial information (bank account, payment instrument details)</li>
                  <li>Passwords (stored in encrypted form)</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When you use our services, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log data and analytics</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Purpose of Data Collection
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We collect and use your information for the following lawful purposes:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>To provide, operate, and maintain our services</li>
                  <li>To process your transactions and fulfill contractual obligations</li>
                  <li>To communicate with you regarding services, updates, and support</li>
                  <li>To send promotional communications (only with your consent)</li>
                  <li>To comply with legal obligations under Indian law</li>
                  <li>To prevent fraud and ensure security of our systems</li>
                  <li>To improve and personalize our services</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Disclosure of Information
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We may disclose your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Service Providers:</strong> With third-party vendors in India or
                    abroad who assist in our operations, subject to confidentiality agreements
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by Indian law, court
                    orders, or government authorities
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger,
                    acquisition, or sale of assets
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> When you explicitly authorize disclosure
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  In accordance with the IT Rules, 2011, we implement reasonable security
                  practices and procedures, including:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Secure access controls and authentication</li>
                  <li>Regular security assessments and audits</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  While we strive to protect your information, no electronic transmission
                  or storage is completely secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Under Indian data protection laws, you have the following rights:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Access:</strong> Request access to your personal information we hold
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Withdrawal of Consent:</strong> Withdraw consent for processing
                    (where consent was the basis for processing)
                  </li>
                  <li>
                    <strong>Grievance Redressal:</strong> Lodge complaints regarding data handling
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  To exercise these rights, please contact our Grievance Officer at info@orchidsw.com.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Data Retention
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill
                  the purposes outlined in this policy, or as required by Indian law. When
                  data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  8. Grievance Officer
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  In accordance with the IT Rules, 2011, we have appointed a Grievance Officer
                  to address your concerns regarding data processing:
                </p>
                <ul className="text-slate-600 space-y-2">
                  <li><strong>Email:</strong> grievance@orchidsw.com</li>
                  <li><strong>Response Time:</strong> Within 30 days of receiving your complaint</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of
                  any material changes by posting the updated policy on this page and updating
                  the &quot;Last updated&quot; date. Continued use of our services after changes
                  constitutes acceptance of the revised policy.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  10. Governing Law
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  This Privacy Policy is governed by and construed in accordance with the laws
                  of India. Any disputes arising from this policy shall be subject to the
                  exclusive jurisdiction of the courts in Patna, Bihar, India.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
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
