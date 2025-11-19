import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";

export const metadata: Metadata = genMeta({
  title: "Pricing - Flexible Engagement Models for Your Project",
  description:
    "Transparent pricing for software engineering services. Choose from flexible monthly retainer plans or contact us for custom project-based pricing. Save 10% with annual commitment.",
  keywords: [
    "software development pricing",
    "engineering services cost",
    "development team pricing",
    "monthly retainer",
    "custom software pricing",
    "SaaS development cost",
    "dedicated development team",
  ],
  url: "/pricing",
  type: "website",
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
