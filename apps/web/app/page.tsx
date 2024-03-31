import { BlogOverview } from "@/components/blog";
import { Section } from "@/components/section";
import { Text } from "@actuallyfrank/ui";
import { getAllPosts } from "@/utils/mdx/read-mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <Section>
        <Text tag="h2">Hi, I&apos;m a developer :)</Text>
        <br />
        <Text tag="p">- Frank</Text>
      </Section>
      <Section spacing="none">
        <div className="px-3">
          <Text tag="h2">Blog</Text>
        </div>

        <BlogOverview posts={posts} />
      </Section>
    </>
  );
}
