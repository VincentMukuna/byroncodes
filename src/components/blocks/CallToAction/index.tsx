import React from "react";

import { CMSLink } from "@/components/Link";
import RichText from "@/components/rich-text";

export const CallToActionBlock: React.FC<
  any & {
    id?: string;
  }
> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8 rounded border border-border bg-card p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-[48rem] items-center">
          <RichText className="" content={richText} enableGutter={false} />
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }: any, i: any) => {
            return <CMSLink key={i} size="lg" {...link} />;
          })}
        </div>
      </div>
    </div>
  );
};
