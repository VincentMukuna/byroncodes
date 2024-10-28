"use client";

import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { Check, Copy } from "lucide-react";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, copyTextToClipboard } from "@/lib/utils";

interface CopyButtonProps extends Omit<ButtonProps, "asChild"> {
  text: string;
  asChild?: boolean;
}

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  ({ className, text, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    const [isCopied, setIsCopied] = React.useState(false);

    const handleCopy = async () => {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Comp
              className={cn(className)}
              ref={ref}
              onClick={handleCopy}
              {...props}
            >
              {isCopied ? (
                <Check className="size-6" />
              ) : (
                <Copy className="size-6" />
              )}
            </Comp>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isCopied ? "Copied!" : "Copy"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
);
CopyButton.displayName = "CopyButton";

interface WebShareProps extends Omit<ButtonProps, "asChild"> {
  asChild?: boolean;
  data: {
    title?: string;
    text?: string;
    url?: string;
    files?: File[];
  };
}

const WebShare = React.forwardRef<HTMLButtonElement, WebShareProps>(
  ({ className, asChild = false, data, children, ...props }, ref) => {
    const Comp = asChild ? Slot : Button;
    const [isSupported, setIsSupported] = React.useState(false);

    React.useEffect(() => {
      setIsSupported(!!navigator.share);
    }, []);

    const handleShare = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (!isSupported) {
        console.error("Web Share API is not supported in this browser");
        return;
      }

      try {
        await navigator.share(data);
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    };

    if (!isSupported) {
      return (
        <CopyButton text={data.url || ""} className={className} {...props}>
          {children || "Copy Link"}
        </CopyButton>
      );
    }

    return (
      <Comp
        className={cn(className)}
        ref={ref}
        onClick={handleShare}
        {...props}
      >
        {children || "Share"}
      </Comp>
    );
  }
);
WebShare.displayName = "WebShare";

export { CopyButton, WebShare };
