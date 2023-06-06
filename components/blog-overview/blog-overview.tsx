import { Post } from "@/lib/mdx/mdx-config";
import { BlogCard } from "./blog-card";

export interface BlogOverviewProps {
  posts: Post[];
}
export function BlogOverview({ posts }: BlogOverviewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-2 md:px-0 ">
      {posts.map((post) => {
        return <BlogCard key={post.slug} post={post} />;
      })}
    </div>
  );
}