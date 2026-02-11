import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Orchid Software transformed our legacy systems into a modern, scalable platform. Their team delivered on time and exceeded our expectations.",
    author: "Dave Nye",
    title: "CEO",
    company: "TrafficAi.",
  },
  {
    quote:
      "The expertise and professionalism of the Orchid team is unmatched. They understood our complex requirements and delivered a solution that perfectly fit our needs.",
    author: "James Caldwell",
    title: "Founder & CTO",
    company: "NexaBridge",
  },
  {
    quote:
      "Working with Orchid was a game-changer for our digital transformation. Their strategic approach helped us achieve 3x faster time-to-market.",
    author: "Priya Sharma",
    title: "Director of Technology",
    company: "Crestline Digital",
  },
];

export function TestimonialsEnterprise() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the leaders who have
            partnered with us on their digital transformation journey.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow duration-200"
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 text-blue-600" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-slate-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-slate-600">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
