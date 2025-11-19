import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Orchid Software - Expert Software Engineering Services",
    template: "%s | Orchid Software",
  },
  description: "Transform your business with our cutting-edge SaaS solution",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Script
            src="https://track-mate-pi.vercel.app//tracking-snippet.js"
            strategy="afterInteractive"
            onLoad={() => {
              if (window.TrackMate) {
                window.TrackMate.init({
                  apiUrl: 'https://your-trackmate-api.vercel.app/api/track',
                  companyId: 'TM-YXL25'
                });
              }
            }}
          />
      </body>
    </html>
  );
}
