import { LivePreviewConfig } from "payload";

export const livePreview: LivePreviewConfig = {
  breakpoints: [
    {
      label: "Mobile",
      name: "mobile",
      width: 375,
      height: 667,
    },
    {
      label: "Tablet",
      name: "tablet",
      width: 768,
      height: 1024,
    },
    {
      label: "Desktop",
      name: "desktop",
      width: 1440,
      height: 900,
    },
  ],
};
