import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";

import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
  display: "swap",
  variable: "--font-roboto",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.variable} font-sans antialiased`}>
        <SiteHeader />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
