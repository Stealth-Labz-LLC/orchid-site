import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { Cookie, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy - Orchid Software",
  description:
    "Learn about how Orchid Software uses cookies and similar technologies to enhance your experience.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Cookie className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Cookies & Tracking</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Cookie Policy
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
                  1. What Are Cookies?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Cookies are small text files that are placed on your device when you visit
                  our website. They help us provide you with a better experience by
                  remembering your preferences and understanding how you use our services.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We use both session cookies (which expire when you close your browser) and
                  persistent cookies (which remain on your device for a set period or until
                  you delete them).
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  2. Types of Cookies We Use
                </h2>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Essential Cookies
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These cookies are necessary for our website to function properly. They
                  enable core functionality such as security, network management, and
                  accessibility.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Performance Cookies
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by
                  collecting and reporting information anonymously.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Functionality Cookies
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  These cookies allow our website to remember choices you make and provide
                  enhanced, more personalized features.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Marketing Cookies
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  These cookies track your online activity to help advertisers deliver more
                  relevant advertising or to limit how many times you see an ad.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  3. Third-Party Cookies
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use services from third-party companies that may set cookies on your
                  device. These include:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>
                    <strong>Google Analytics:</strong> To analyze website traffic and usage
                  </li>
                  <li>
                    <strong>Stripe:</strong> For payment processing
                  </li>
                  <li>
                    <strong>Intercom:</strong> For customer support and chat
                  </li>
                  <li>
                    <strong>Social Media Platforms:</strong> For social sharing features
                  </li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  These third parties have their own privacy policies governing their use of
                  cookies.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  4. Cookie Duration
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-200 rounded-lg overflow-hidden">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                          Cookie Type
                        </th>
                        <th className="border border-slate-200 px-4 py-3 text-left font-semibold text-slate-900">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Session Cookies
                        </td>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Until browser is closed
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Persistent Cookies
                        </td>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Up to 2 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Analytics Cookies
                        </td>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Up to 2 years
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Marketing Cookies
                        </td>
                        <td className="border border-slate-200 px-4 py-3 text-slate-600">
                          Up to 1 year
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  5. Managing Cookies
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject cookies. You can
                  exercise your cookie preferences by:
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Browser Settings</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You
                  can:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Clear cookies when you close your browser</li>
                  <li>Delete existing cookies</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">Opt-Out Tools</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  You can opt out of specific tracking technologies:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>
                    Google Analytics:{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Analytics Opt-out
                    </a>
                  </li>
                  <li>
                    Network Advertising Initiative:{" "}
                    <a
                      href="http://optout.networkadvertising.org/"
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NAI Opt-out
                    </a>
                  </li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  6. Impact of Disabling Cookies
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you choose to disable cookies, some features of our website may not
                  function properly. This includes:
                </p>
                <ul className="list-disc pl-6 text-slate-600 space-y-2">
                  <li>Staying logged into your account</li>
                  <li>Remembering your preferences</li>
                  <li>Personalized content recommendations</li>
                  <li>Analytics and performance tracking</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  7. Updates to This Policy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in
                  technology, legislation, or our business operations. We will notify you of
                  any significant changes.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  If you have questions about our use of cookies, please contact us at:
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
