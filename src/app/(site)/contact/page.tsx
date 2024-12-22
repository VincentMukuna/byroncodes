import { Metadata } from "next";
import dynamic from "next/dynamic";

import { siteConfig } from "@/config/site";

const ContactForm = dynamic(() => import("./_components/contact-form"));

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">Contact Me</h1>
      <p className="mb-6 text-muted-foreground">
        Have a question or want to work together? Fill out the form below, and
        I&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Contact Me",
  description:
    "Get in touch with Byron Mandela, a skilled developer. Whether you have a project in mind or just want to connect, reach out through this contact form.",
  openGraph: {
    title: "Contact Me",
    description:
      "Get in touch with Byron Mandela, a skilled developer. Whether you have a project in mind or just want to connect, reach out through this contact form.",
    type: "website",
    url: new URL("/contact", siteConfig.url).toString(),
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
    card: "summary_large_image",
    title: "Contact Me",
    description:
      "Get in touch with Byron Mandela, a skilled developer. Whether you have a project in mind or just want to connect, reach out through this contact form.",
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
