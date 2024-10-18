import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Byron Codes",
  description: "Byron's personal blog and portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoFont.className} antialiased`}>{children}</body>
    </html>
  );
}
