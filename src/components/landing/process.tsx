import { Lightbulb, Code2, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: Lightbulb,
    description:
      "We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "02",
    title: "Design & Build",
    icon: Code2,
    description:
      "Our team designs the architecture and builds your solution using modern frameworks and best practices.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "03",
    title: "Test & Deploy",
    icon: Rocket,
    description:
      "Rigorous testing ensures quality before smooth deployment to production with CI/CD pipelines.",
    color: "from-red-500 to-pink-500",
  },
  {
    number: "04",
    title: "Support",
    icon: HeadphonesIcon,
    description:
      "Ongoing maintenance, performance monitoring, and continuous improvements to keep your software running.",
    color: "from-pink-500 to-purple-500",
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
            Our Process
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From Concept to Launch
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A proven development process that delivers projects on time and exceeds expectations.
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-orange-500 via-red-500 to-purple-500" />

            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Number Circle on Line */}
                  <div className={`relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg`}>
                    <span className="text-3xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 mb-4">
                      <step.icon className="h-6 w-6 text-slate-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 via-red-500 to-purple-500" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Number Circle */}
                  <div className={`relative z-10 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-lg`}>
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-slate-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                          <step.icon className="h-5 w-5 text-slate-700" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
