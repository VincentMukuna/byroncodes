import { NavMenuItem } from "@/types/header-nav";

export const headerNavLinks: NavMenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Me",
    href: "/about-me",
  },
  {
    label: "My Work",
    href: "/my-work",
  },
  {
    label: "Blog",
    menuItems: [
      {
        title: "Explore My Work",
        items: [
          {
            title: "Projects",
            description: "Discover my latest projects and achhievements.",
            href: "/blog",
          },
          {
            title: "Testimonials",
            description: "What my clients say about my work.",
            href: "/blog",
          },

          {
            title: "Contact Me",
            description: "Get in touch for collaboration opportunities.",
            href: "/blog",
          },
          {
            title: "Blog",
            description: "Insights and experiences shared through my blog.",
            href: "/blog",
          },
        ],
      },
      {
        title: "Latest Blog Posts",
        items: [
          {
            title: "Tech Insights",
            description: "Thoughts on technology and development trends.",
            href: "/blog",
          },
          {
            title: "Coding Tips",
            description: "Helpful tips for aspiring developers.",
            href: "/blog",
          },
          {
            title: "Project Updates",
            description: "Stay updated on my current projects.",
            href: "/blog",
          },
          {
            title: "Personal Growth",
            description: "Reflections on my journey as a developer.",
            href: "/blog",
          },
        ],
      },
      {
        title: "More Blog Topics",
        items: [
          {
            title: "Web Development",
            description: "Exploring the world of web technologies.",
            href: "/blog",
          },
          {
            title: "Coding Tips",
            description:
              "Principles and practices for effective software design.",
            href: "/blog",
          },
          {
            title: "Freelancing Tips",
            description: "Advice for successful freelancing in tech.",
            href: "/blog",
          },
          {
            title: "Resources",
            description: "Tools and resources I recommend for developers.",
            href: "/blog",
          },
        ],
      },
    ],
    card: {
      label: "Featured Articles",
      title: "Tech Trends",
      description: "Latest trends shaping the tech industry.",
      image: {
        src: "/img/business-solutions.jpg",
        alt: "Persons discussing business solutions",
      },
      link: {
        href: "/blog",
        label: "Read more",
      },
    },
  },
];
