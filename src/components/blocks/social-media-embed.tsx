"use client";

import {
  FacebookEmbed,
  InstagramEmbed,
  LinkedInEmbed,
  PinterestEmbed,
  TikTokEmbed,
  XEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";

type SocialMediaEmbedTypes =
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "pinterest"
  | "youtube"
  | "tiktok";

export type SocialMediaEmbedBlockProps = {
  type: SocialMediaEmbedTypes;
  url: string;
};
export const SocialMediaEmbedBlock: React.FC<SocialMediaEmbedBlockProps> = ({
  type,
  url,
}) => {
  const getEmbed = () => {
    switch (type) {
      case "linkedin":
        return <LinkedInEmbed url={url} width={"100%"} />;
      case "twitter":
        return (
          <div className="flex items-center justify-center">
            <XEmbed url={url} width={325} />
          </div>
        );

      case "instagram":
        return (
          <div className="flex items-center justify-center">
            <InstagramEmbed
              url={url}
              captioned
              width={328}
              className="mx-auto"
            />
          </div>
        );
      case "facebook":
        return (
          <div className="flex items-center justify-center">
            <FacebookEmbed
              url={url}
              className="mx-auto"
              width={"100%"}
              style={{ maxWidth: 550 }}
            />
          </div>
        );
      case "pinterest":
        return (
          <div className="flex items-center justify-center">
            <PinterestEmbed
              url={url}
              className="mx-auto"
              width={345}
              height={574}
            />
          </div>
        );
      case "youtube":
        return (
          <YouTubeEmbed
            url={url}
            width={"100%"}
            style={{
              borderRadius: ".2rem",
            }}
          />
        );
      case "tiktok":
        return (
          <div className="flex items-center justify-center">
            <TikTokEmbed url={url} width={325} />
          </div>
        );
      default:
        return null;
    }
  };
  return <div className="container">{getEmbed()}</div>;
};
