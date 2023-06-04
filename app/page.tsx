import { BlogOverview } from "@/components/blog-overview";
import { getAllPosts } from "@/lib/mdx/read-mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return <BlogOverview posts={posts} />;
}
