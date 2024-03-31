import { Header } from "@/components/blog/blog-header";
import { Section } from "@/components/section";
import { getAllPosts, getPostBySlug } from "@/utils/mdx/read-mdx";
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
      <Section spacing="none">
        <Section.Background>
          <div className="flex">
            <article className="prose prose-lg prose-table:table-fixed prose-invert max-w-none w-full ">
              {elements}
            </article>
          </div>
        </Section.Background>
      </Section>
    </>
  );
}
