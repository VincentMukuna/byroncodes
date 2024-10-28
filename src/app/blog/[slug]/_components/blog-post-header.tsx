import Image from "next/image";
import Link from "next/link";

import { Link2Icon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Share2Icon } from "lucide-react";

import { FacebookIcon, TwitterXIcon } from "@/components/icons/logos";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { WebShare } from "@/components/web-share";

const blogPostConfig = {
  breadcrumbs: [
    { label: "Blog", href: "/blog" },
    { label: "Tech", href: "/blog/tech", active: true },
  ],
  title: "Exploring the Future of Software Development",
  author: "Jane Doe",
  date: "15 Oct 2023",
  readTime: "4 min read",
  image: "/img/big-data.jpg",
  imageAlt: "Future of Software Development",
  shareLinks: [
    { icon: Link2Icon, href: "#", label: "Copy link" },
    { icon: LinkedInLogoIcon, href: "#", label: "Share on LinkedIn" },
    { icon: TwitterXIcon, href: "#", label: "Share on Twitter" },
    { icon: FacebookIcon, href: "#", label: "Share on Facebook" },
  ],
};

export function BlogPostHeader() {
  return (
    <header className="-mt-[76px] bg-background-secondary px-4 py-[124px] sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="flex flex-col justify-between gap-8 lg:w-[420px]">
            <div className="space-y-8">
              <Breadcrumb>
                <BreadcrumbList>
                  {blogPostConfig.breadcrumbs.map((crumb, index) => (
                    <>
                      <BreadcrumbItem key={index}>
                        <BreadcrumbLink href={crumb.href} active={crumb.active}>
                          {crumb.label}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {index < blogPostConfig.breadcrumbs.length - 1 && (
                        <BreadcrumbSeparator />
                      )}
                    </>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="font-poppins text-3xl font-semibold leading-tight text-[#ff8328] sm:text-4xl md:text-[45px] md:leading-[1.2]">
                {blogPostConfig.title}
              </h1>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="font-poppins text-base text-white">
                  By{" "}
                  <span className="font-roboto font-semibold">
                    {blogPostConfig.author}
                  </span>
                </p>
                <div className="flex items-center gap-2 text-sm text-white">
                  <span>{blogPostConfig.date}</span>
                  <span className="text-xl">•</span>
                  <span>{blogPostConfig.readTime}</span>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="font-roboto text-base font-semibold text-white">
                  Share this post
                </h2>
                <div className="flex flex-wrap gap-2">
                  <WebShare
                    data={{
                      title: blogPostConfig.title,
                      text: "Check out this blog post",
                      url: "/blog/tech/exploring-the-future-of-software-development",
                    }}
                    variant={"secondary"}
                    size={"icon"}
                    className="inline-flex items-center justify-center rounded-full bg-[#009fba] p-5 text-primary transition-colors hover:bg-[#007a91]"
                  >
                    <Share2Icon />
                  </WebShare>
                  {blogPostConfig.shareLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-full bg-[#009fba] p-2 transition-colors hover:bg-[#007a91]"
                      aria-label={link.label}
                    >
                      <link.icon className="size-6 text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full lg:flex-1">
            <Image
              src={blogPostConfig.image}
              alt={blogPostConfig.imageAlt}
              layout="fill"
              priority
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
