import { NavMenuItem } from "@/types/header-nav";

export const headerNavLinks: NavMenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/#",
  },
  {
    label: "My Work",
    href: "/#",
  },
  {
    label: "Blog",
    menuItems: [
      // {
      //   isCard: false,
      //   title: "Explore My Work",
      //   items: [
      //     {
      //       title: "Projects",
      //       description: "Discover my latest projects and achhievements.",
      //       href: "/#",
      //     },
      //     {
      //       title: "Testimonials",
      //       description: "What my clients say about my work.",
      //       href: "/#",
      //     },

      //     {
      //       title: "Contact Me",
      //       description: "Get in touch for collaboration opportunities.",
      //       href: "/#",
      //     },
      //     {
      //       title: "Blog",
      //       description: "Insights and experiences shared through my blog.",
      //       href: "/#",
      //     },
      //   ],
      // },
      {
        isCard: false,
        title: "Latest Blog Posts",
        items: [
          {
            title: "Tech Insights",
            description: "Thoughts on technology and development trends.",
            href: "/#",
          },
          {
            title: "Coding Tips",
            description: "Helpful tips for aspiring developers.",
            href: "/#",
          },
          {
            title: "Project Updates",
            description: "Stay updated on my current projects.",
            href: "/#",
          },
          {
            title: "Personal Growth",
            description: "Reflections on my journey as a developer.",
            href: "/#",
          },
        ],
      },
      {
        isCard: false,
        title: "More Blog Topics",
        items: [
          {
            title: "Web Development",
            description: "Exploring the world of web technologies.",
            href: "/#",
          },
          {
            title: "Coding Tips",
            description:
              "Principles and practices for effective software design.",
            href: "/#",
          },
          {
            title: "Freelancing Tips",
            description: "Advice for successful freelancing in tech.",
            href: "/#",
          },
          {
            title: "Resources",
            description: "Tools and resources I recommend for developers.",
            href: "/#",
          },
        ],
      },
      {
        isCard: true,
        label: "Featured Articles",
        title: "Tech Trends",
        description: "Latest trends shaping the tech industry.",
        image: {
          src: "",
          alt: "",
        },
        link: {
          href: "/#",
          label: "Read more",
        },
      },
    ],
  },
];
