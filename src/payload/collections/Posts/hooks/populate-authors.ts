import type { CollectionAfterReadHook } from "payload";

import { Post, User } from "@/payload-types";

// The `user` collection has access control locked so that users are not publicly accessible
// This means that we need to populate the authors manually here to protect user privacy
// GraphQL will not return mutated user data that differs from the underlying schema
// So we use an alternative `populatedAuthors` field to populate the user data, hidden from the admin UI
export const populateAuthors: CollectionAfterReadHook<Post> = async ({
  doc,
  req,
  req: { payload },
}) => {
  if (doc?.authors) {
    const authorDocs: User[] = [];
    for (const author of doc.authors) {
      const authorDoc = await payload.findByID({
        collection: "users",
        id: typeof author === "object" ? author?.id : author,
        depth: 1,
        req,
      });

      if (authorDoc) {
        authorDocs.push(authorDoc);
      }
    }
    doc.populatedAuthors = authorDocs.map((authorDoc) => ({
      id: authorDoc.id.toString(),
      name: authorDoc.name,
    }));
  }
  return doc;
};