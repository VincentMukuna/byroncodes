import { CollectionSlug } from "payload";

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  projects: "/my-work",
  posts: "/blog",
  solutions: "/solutions"
};

type Props = {
  collection: keyof typeof collectionPrefixMap;
  slug: string;
};

export const generatePreviewPath = ({ collection, slug }: Props) => {
  const path = `${collectionPrefixMap[collection]}/${slug}`;

  const params = {
    slug,
    collection,
    path,
  };

  const encodedParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    encodedParams.append(key, value);
  });

  return `/next/preview?${encodedParams.toString()}`;
};
