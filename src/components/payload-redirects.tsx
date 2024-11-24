import { notFound, redirect } from "next/navigation";
import type React from "react";

import { Project } from "@/payload-types";
import { getCachedDocument } from "@/utils/getDocument";
import { getCachedRedirects } from "@/utils/getRedirects";

interface Props {
  disableNotFound?: boolean;
  url: string;
}

/* This component helps us with SSR based dynamic redirects */
export const PayloadRedirects: React.FC<Props> = async ({
  disableNotFound,
  url,
}) => {
  const slug = url.startsWith("/") ? url : `${url}`;

  const redirects = await getCachedRedirects()();

  const redirectItem = redirects.find((redirect) => redirect.from === slug);

  if (redirectItem) {
    if (redirectItem.to?.url) {
      redirect(redirectItem.to.url);
    }

    let redirectUrl: string;

    if (typeof redirectItem.to?.reference?.value === "string") {
      const collection = redirectItem.to?.reference?.relationTo;
      const id = redirectItem.to?.reference?.value;

      const document = (await getCachedDocument(collection, id)()) as Project;
      redirectUrl = `${redirectItem.to?.reference?.relationTo !== "projects" ? `/my-work/${redirectItem.to?.reference?.relationTo}` : ""}/${
        document?.slug
      }`;
    } else {
      redirectUrl = `${redirectItem.to?.reference?.relationTo !== "projects" ? `/my-work/${redirectItem.to?.reference?.relationTo}` : ""}/${
        typeof redirectItem.to?.reference?.value === "object"
          ? redirectItem.to?.reference?.value?.slug
          : ""
      }`;
    }

    if (redirectUrl) redirect(redirectUrl);
  }

  if (disableNotFound) return null;
  return notFound();
};
