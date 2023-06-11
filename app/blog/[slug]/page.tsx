import { Header } from "@/components/blog-header";
import { Section } from "@/components/section";
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
      <Section>
        <div className=" px-2 md:px-8 py-4 pt-8 backdrop-blur-md bg-white/90 dark:bg-black/60 rounded-lg flex flex-col gap-12 mt-0 md:-mt-8">
          {elements}
        </div>
      </Section>
    </>
  );
}
