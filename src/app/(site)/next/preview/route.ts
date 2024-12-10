import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

import configPromise from "@payload-config";
import jwt from "jsonwebtoken";
import { CollectionSlug, getPayload } from "payload";

const payloadToken = "payload-token";

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string;
      };
    };
  }
): Promise<Response> {
  const payload = await getPayload({ config: configPromise });
  const token = req.cookies.get(payloadToken)?.value;
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const collection = searchParams.get("collection") as CollectionSlug;
  const slug = searchParams.get("slug");

  const previewSecret = searchParams.get("previewSecret");

  if (previewSecret) {
    return new Response("You are not allowed to preview this page", {
      status: 403,
    });
  } else {
    if (!path) {
      console.log("No path provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!collection) {
      console.log("No collection provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!slug) {
      console.log("No slug provided");
      return new Response("No path provided", { status: 404 });
    }

    if (!token) {
      console.log("No token provided");
      new Response("You are not allowed to preview this page", { status: 403 });
    }

    if (!path.startsWith("/")) {
      console.log("Invalid path provided", path);
      new Response("This endpoint can only be used for internal previews", {
        status: 500,
      });
    }

    let user;

    try {
      user = jwt.verify(token, payload.secret);
    } catch (error) {
      payload.logger.error("Error verifying token for live preview:", error);
    }

    const draft = await draftMode();

    // You can add additional checks here to see if the user is allowed to preview this page
    if (!user) {
      draft.disable();
      console.log("User not found");
      return new Response("You are not allowed to preview this page", {
        status: 403,
      });
    }

    // Verify the given slug exists
    try {
      const docs = await payload.find({
        collection: collection,
        draft: true,
        where: {
          slug: {
            equals: slug,
          },
        },
      });

      if (!docs.docs.length) {
        return new Response("Document not found", { status: 404 });
      }
    } catch (error) {
      payload.logger.error("Error verifying token for live preview:", error);
    }

    draft.enable();
    payload.logger.info("User is allowed to preview this page");
    payload.logger.info("Redirecting to:", path);

    redirect(path);
  }
}
