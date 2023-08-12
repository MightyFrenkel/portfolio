import { Header } from "@/components/blog-overview/blog-header";
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
        <Section.Background>
          <div className="flex">
            <article className="prose prose-lg prose-invert max-w-none w-full md:w-2/3">
              {elements}
            </article>
            <aside className="hidden md:block w-1/3 ml-8">
              <div className="sticky top-0">
                <div className="bg-violet-700/50 backdrop-blur-md rounded-lg p-4">
                  <h3 className="text-white text-xl font-bold mb-4">
                    Table of contents
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <a href="#first">First section</a>
                    </li>
                    <li>
                      <a href="#second">Second section</a>
                    </li>
                    <li>
                      <a href="#third">Third section</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Section.Background>
      </Section>
    </>
  );
}
