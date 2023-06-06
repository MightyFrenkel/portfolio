import { Header } from "@/components/blog-header";
import { Section } from "@/components/section";
import { Text } from "@/components/text";
import { getAllPosts, getPostBySlug } from "@/lib/mdx/read-mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { title, elements, date } = await getPostBySlug(slug).catch(() => {
    notFound();
  });
  return (
    <>
      <Header title={title} date={date} />
      <main className="mt-0 md:-mt-8">
        <Section>
          <div className="px-2 md:px-8 py-4 pt-8 backdrop-blur-md bg-black/60 rounded-lg flex flex-col gap-12">
            {elements}
          </div>
        </Section>
      </main>
    </>
  );
}
