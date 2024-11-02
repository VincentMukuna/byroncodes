import type { Block } from "payload";

export const Code: Block = {
  slug: "code",
  fields: [
    {
      name: "language",
      type: "select",
      defaultValue: "typescript",
      options: [
        {
          label: "Typescript",
          value: "typescript",
        },
        {
          label: "Javascript",
          value: "javascript",
        },
        {
          label: "Python",
          value: "python",
        },
        {
          label: "HTML",
          value: "html",
        },
        {
          label: "YAML",
          value: "yaml",
        },
        {
          label: "JSON",
          value: "json",
        },
        {
          label: "SQL",
          value: "sql",
        },
        {
          label: "Bash",
          value: "bash",
        },
        {
          label: "CSS",
          value: "css",
        },
      ],
    },
    {
      name: "code",
      type: "code",
      label: false,
      required: true,
    },
  ],
};
