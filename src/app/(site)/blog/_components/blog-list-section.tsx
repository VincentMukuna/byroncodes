import { BlogPostCard } from "@/components/blog-post-card";
import { Button } from "@/components/ui/button";

const blogConfig = {
  categories: [
    { name: "View all", isActive: true },
    { name: "Web Development", isActive: false },
    { name: "Programming Tips", isActive: false },
    { name: "Tech Reviews", isActive: false },
    { name: "Career Advice", isActive: false },
  ],
  posts: [
    {
      image: "/img/blog/robot-human-holding-hands.jpg",
      category: "Tech",
      readTime: "7 min read",
      title: "The Future of AI in Software Development",
      description:
        "Exploring how AI is transforming the landscape of software engineering.",
      link: "/blog/ai-in-software-development",
    },
    {
      image: "/img/blog/creative.jpg",
      category: "Web Development",
      readTime: "6 min read",
      title: "Mastering CSS: Tips and Tricks",
      description:
        "Enhance your web design skills with these essential CSS techniques.",
      link: "/blog/mastering-css",
    },
    {
      image: "/img/blog/seo.jpg",
      category: "Web Development",
      readTime: "4 min read",
      title: "Building Responsive Websites with Flexbox",
      description: "Learn how to create flexible layouts using CSS Flexbox.",
      link: "/blog/responsive-flexbox",
    },
    {
      image: "/img/blog/athlete-tired.jpg",
      category: "Programming",
      readTime: "8 min read",
      title: "Debugging JavaScript: Common Pitfalls",
      description: "Avoid these frequent mistakes when coding in JavaScript.",
      link: "/blog/debugging-javascript",
    },
    {
      image: "/img/blog/bot-connected.jpg",
      category: "Career",
      readTime: "3 min read",
      title: "The Importance of Version Control",
      description:
        "Understand why version control is crucial for software development.",
      link: "/blog/version-control-importance",
    },
    {
      image: "/img/blog/cloud.jpg",
      category: "Tech",
      readTime: "9 min read",
      title: "Exploring Cloud Computing for Developers",
      description:
        "Discover how cloud computing is reshaping the development landscape.",
      link: "/blog/cloud-computing-for-developers",
    },
  ],
};

export function BlogListSection() {
  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-12 flex flex-wrap items-center justify-start gap-4">
          {blogConfig.categories.map((category, index) => (
            <Button
              key={index}
              variant={category.isActive ? "default" : "ghost"}
              className={`font-poppins text-base font-normal ${
                category.isActive
                  ? "bg-[#003146] text-white"
                  : "text-white hover:bg-[#003146]"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </nav>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogConfig.posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
