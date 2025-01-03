import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import { Suspense } from "react";

import { Analytics } from "@vercel/analytics/react";

import { LivePreviewListener } from "@/components/live-preview-listener";
import ScrollTop from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
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
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          robotoFont.variable,
          poppinsFont.variable,
          "dark font-sans antialiased"
        )}
      >
        <div className="dark flex min-h-[100dvh] flex-col">
          <LivePreviewListener />
          <Suspense fallback={null}>
            <SiteHeader />
          </Suspense>
          <div className="flex-1">{children}</div>
          <SiteFooter />
          <Toaster richColors position="bottom-left" />
        </div>
        <TailwindIndicator />
        <ScrollTop />
        <Analytics />
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
  verification: {
    google: "hcnxp2hTBwVg5tcytxTUJalSV_rbY_O2YNDD7PU0Kh8",
  },
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
