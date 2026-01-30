import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code2,
  Shield,
  Rocket,
  Cloud,
  GitBranch,
  Database,
  Users,
  Sparkles,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Tailored software solutions built with modern frameworks and best practices for your unique business needs.",
    gradient: "from-blue-500 to-sky-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption, compliance with industry standards, and robust security protocols to protect your data.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "From MVP to production in weeks, not months. Agile methodology for faster time-to-market.",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Scalable infrastructure on AWS, Azure, or GCP. Auto-scaling, high availability, and global CDN.",
    gradient: "from-sky-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline",
    description:
      "Automated testing, deployment, and monitoring. Continuous integration for reliable releases.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized data architecture with PostgreSQL, MongoDB, or your preferred database solution.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Experienced engineers, designers, and project managers working exclusively on your project.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Leverage machine learning and AI capabilities to automate processes and gain insights.",
    gradient: "from-blue-400 to-sky-500",
  },
  {
    icon: Globe,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs with comprehensive documentation and seamless third-party integrations.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
            <Sparkles className="mr-2 h-4 w-4 text-blue-500" />
            <span className="font-medium text-slate-700">Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything You Need to Build{" "}
            <span className="text-blue-500">World-Class Software</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            From initial concept to ongoing maintenance, we provide end-to-end software
            engineering services tailored to your business goals.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300"
            >
              <CardHeader className="space-y-4">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
                <CardDescription className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
