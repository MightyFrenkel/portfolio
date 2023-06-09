import { BlogOverview } from "@/components/blog-overview";
import { Section } from "@/components/section";
import { getAllPosts } from "@/lib/mdx/read-mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <Section>
      <BlogOverview posts={posts} />
    </Section>
  );
}
