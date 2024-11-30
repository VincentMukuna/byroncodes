"use client";

import React from "react";

import { Highlight, themes } from "prism-react-renderer";

type Props = {
  code: string;
  language?: string;
};

export const Code: React.FC<Props> = ({ code, language }) => {
  return (
    <Highlight
      code={code}
      language={language || "JavaScript"}
      theme={themes.dracula}
    >
      {({ getLineProps, getTokenProps, tokens }) => (
        <pre className="overflow-x-auto rounded border border-border bg-black p-4">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ className: "table-row", line })}>
              <span className="table-cell select-none text-right text-white/25">
                {i + 1}
              </span>
              <span className="table-cell pl-4">
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
