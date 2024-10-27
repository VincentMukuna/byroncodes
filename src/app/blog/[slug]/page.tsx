import { BlogPostContent } from "./_components/blog-post-content";
import { BlogPostCta } from "./_components/blog-post-cta";
import { BlogPostHeader } from "./_components/blog-post-header";
import { RelatedPosts } from "./_components/related-posts";

export default function BlogPostPage() {
  return (
    <main>
      <BlogPostHeader />
      <BlogPostContent />
      <BlogPostCta />
      <RelatedPosts />
    </main>
  );
}
