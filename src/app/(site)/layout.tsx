import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";

import { LivePreviewListener } from "@/components/live-preview-listener";
import ScrollTop from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
  display: "swap",
  variable: "--font-roboto",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          robotoFont.variable,
          poppinsFont.variable,
          "dark font-sans antialiased"
        )}
      >
        <LivePreviewListener />
        <div className="flex min-h-[100dvh] flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <TailwindIndicator />
        <ScrollTop />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Fullstack software developer",
    "Python developer",
    "Django developer",
    "React developer",
    "Docker developer",
    "Python and Django web development",
    "Fullstack web development",
    "Web application development",
    "Software development tutorials",
    "Coding tutorials",
    "Byron fullstack developer",
    "React.js development",
    "Docker for developers",
    "Modern web frameworks",
    "Fullstack projects",
    "Developer blog",
    "Web development best practices",
    "Frontend and backend development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [
      {
        url: new URL("/img/og/opengraph-image.jpeg", siteConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: "ByronCodes",
      },
    ],
  },
  twitter: {
    site: "@mandela_byron",
    title: "ByronCodes",
    card: "summary_large_image",
    description:
      "Fullstack developer. Explore my portfolio, coding tutorials, and insights on fullstack development.",
    images: [
      {
        url: new URL("/img/og/opengraph-image.jpeg", siteConfig.url).toString(),
        width: 1200,
        height: 630,
        alt: "ByronCodes",
      },
    ],
  },
};
