import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ContactForm } from "@/components/contact/contact-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Headphones,
} from "lucide-react";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Contact Us - Get in Touch | Orchid Software India",
  description:
    "Have questions about our software engineering services? Contact Orchid Software in Patna, India. Get a free consultation for your software development project.",
  keywords: [
    "contact orchid software",
    "software development consultation",
    "IT services Patna",
    "software company Bihar",
    "free consultation",
    "project inquiry",
    "get quote software development",
  ],
  url: "/contact",
  type: "website",
  image: "/images/contact/contact-og.jpeg",
});

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Sales Inquiries",
    description: "Learn about our services and get a custom quote",
    contact: "info@orchidsw.com",
    type: "email",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Get help with your existing projects",
    contact: "dev@orchidsw.com",
    type: "email",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We typically respond within 24 hours",
    contact: "24/7 for Enterprise",
    type: "text",
  },
];

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please include details about your project, timeline, budget range, and any specific requirements. The more information you provide, the better we can assist you.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer complimentary 30-minute consultation calls to discuss your project and how we can help.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Let&apos;s Start a{" "}
              <span className="text-blue-600">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question about our services, pricing, or anything else,
              our team is ready to answer all your questions.
            </p>
          </div>

          {/* Contact Method Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-slate-200 rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{method.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                {method.type === "email" ? (
                  <a
                    href={`mailto:${method.contact}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    {method.contact}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-slate-700">{method.contact}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Info */}
      <section id="contact-form" className="py-16 md:py-24 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Office Info */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Office Information
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Address</p>
                      <p className="text-sm text-slate-600">
                        E47 Chhipura, Near DAV Mode<br />
                        Parsa Bazar, Patna, Bihar, India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Phone</p>
                      <a
                        href="tel:+919153733160"
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        +91 9153 73 3160
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Email</p>
                      <a
                        href="mailto:info@orchidsw.com"
                        className="text-sm text-blue-600 hover:text-blue-700"
                      >
                        info@orchidsw.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 mb-1">Business Hours</p>
                      <p className="text-sm text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600">
                    Enterprise clients have access to 24/7 support. Contact your
                    account manager for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">
                Quick answers to common questions about getting in touch
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-slate-200 rounded-xl"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
