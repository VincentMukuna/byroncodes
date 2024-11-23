import React from "react";

import { cn } from "@/lib/utils";

interface CtaBlockProps {
  children: React.ReactNode;
  className?: string;
}

interface TitleProps {
  children: React.ReactNode;
}

interface DescriptionProps {
  children: React.ReactNode;
}

interface HeaderProps {
  children: React.ReactNode;
}

interface ActionsProps {
  children: React.ReactNode;
}

const Wrapper = ({ children, className = "" }: CtaBlockProps) => {
  return (
    <section
      className={
        "bg-black px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-28"
      }
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "flex flex-col items-center justify-between gap-8 rounded-lg border border-gray-800 p-6 sm:p-8 md:p-12 lg:flex-row",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

const Title = ({ children }: TitleProps) => (
  <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[38px] md:leading-[1.2]">
    {children}
  </h2>
);

const Description = ({ children }: DescriptionProps) => (
  <p className="text-lg font-normal leading-7 text-white sm:text-xl sm:leading-8">
    {children}
  </p>
);

const Header = ({ children }: HeaderProps) => (
  <div className="flex flex-col items-start justify-start gap-4 lg:max-w-2xl">
    {children}
  </div>
);

const Actions = ({ children }: ActionsProps) => (
  <div className="flex items-center gap-4">{children}</div>
);

const CtaBlock = Object.assign(Wrapper, {
  Title,
  Description,
  Header,
  Actions,
});

export { CtaBlock };
