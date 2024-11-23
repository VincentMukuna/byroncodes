import { PostCard } from "@/components/post-card";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/data/categories";
import { queryPosts } from "@/data/posts";

export async function BlogListSection() {
  const posts = await queryPosts({ title: "" });
  const categories = await getCategories();
  return (
    <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-12 flex flex-wrap items-center justify-start gap-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={false ? "default" : "ghost"}
              className={`font-poppins text-base font-normal ${
                false
                  ? "bg-[#003146] text-white"
                  : "text-white hover:bg-[#003146]"
              }`}
            >
              {category.title}
            </Button>
          ))}
        </nav>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.docs.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
