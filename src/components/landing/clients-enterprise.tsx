"use client";

import Image from "next/image";

const clients = [
  {
    name: "Evergreen Evolutions",
    logo: "/images/client-company/evergreen-evolutions-logo.png",
    width: 150,
    height: 40,
  },
  {
    name: "QuoteRocket",
    logo: "/images/client-company/quote-rocket-logo.svg",
    width: 140,
    height: 35,
  },
  {
    name: "TrafficAi",
    logo: "/images/client-company/trafficai.webp",
    width: 130,
    height: 35,
  },
  {
    name: "Stealth Labz",
    logo: "/images/client-company/stealth-black.png",
    width: 120,
    height: 18,
  },
];

export function ClientsEnterprise() {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-10">
          Trusted by Leading Companies Worldwide
        </p>

        {/* Auto-scrolling Client Logos */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-5 md:h-6 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
