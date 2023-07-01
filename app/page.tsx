import { BlogOverview } from "@/components/blog-overview";
import { Section } from "@/components/section";
import { Text } from "@/components/text";
import { getAllPosts } from "@/lib/mdx/read-mdx";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <Section>
        <Section.Background>
          <Text.h2>Hi, I&apos;m a developer.</Text.h2>
          <Text.p>
            Consider this website a work in progress, but feel free to have a
            look around while I am working on it!
          </Text.p>
          <Text.p>- Frank</Text.p>
        </Section.Background>
      </Section>
      <Section>
        <Text.h2>Blog</Text.h2>

        <BlogOverview posts={posts} />
      </Section>
    </>
  );
}
