import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ByronCodes",
    short_name: "ByronCodes",
    description:
      "Fullstack developer. Explore my portfolio, coding tutorials, and insights on fullstack development.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    scope: "/",
    lang: "en-US",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshot1.png",
        sizes: "640x480",
        type: "image/png",
      },
      {
        src: "/screenshot2.png",
        sizes: "640x480",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Portfolio",
        short_name: "Portfolio",
        description: "View my portfolio",
        url: "/my-work",
        icons: [],
      },
      {
        name: "Blog",
        short_name: "Blog",
        description: "Read my blog",
        url: "/blog",
        icons: [],
      },
      {
        name: "About me",
        short_name: "About",
        description: "Learn more about me",
        url: "/about-me",
        icons: [],
      },
    ],
  };
}
