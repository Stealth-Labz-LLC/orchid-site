"use client";

import Link from "next/link";
import Image from "next/image";

export function TrustedBy() {
  const companies = [
    { name: "TrafficAi", image: "/images/client-company/trafficai.webp", site_url: "https://www.trafficai.io/" },
    { name: "StealthLabz", image: "/images/client-company/stealth-black.png", site_url: "https://stealthlabz.com/" },
    { name: "Evergreen Evolutions", image: "/images/client-company/evergreen-evolutions-logo.png", site_url: "https://evergreenevolutions.com/" },
    { name: "Quote Rocket", image: "/images/client-company/quote-rocket-logo.svg", site_url: "https://quoterocket.co.za/" },
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-4">
        {/* Trusted By Section */}
        <div className="text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted by leading companies worldwide
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity mx-10 flex-shrink-0"
                >
                  <Link href={company.site_url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={140}
                      height={50}
                    />
                  </Link>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity mx-10 flex-shrink-0"
                >
                  <Link href={company.site_url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={140}
                      height={50}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
