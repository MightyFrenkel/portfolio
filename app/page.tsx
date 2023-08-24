import { BlogOverview } from "@/components/blog";
import { Section } from "@/components/section";
import { Text } from "@/components/text";
import { getAllPosts } from "@/utils/mdx/read-mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <Section>
        <Text.h2>Hi, I&apos;m a developer :)</Text.h2>
        <br />
        <Text.p>
          Consider this website a work in progress, but feel free to have a look
          around while I am working on it!
        </Text.p>
        <br />
        <Text.p>- Frank</Text.p>
      </Section>
      <Section spacing="none">
        <div className="px-3">
          <Text.h2>Blog</Text.h2>
        </div>

        <BlogOverview posts={posts} />
      </Section>
    </>
  );
}
