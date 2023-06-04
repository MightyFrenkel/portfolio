import { getAllPosts, getPostBySlug, getPostSlugs } from "@/lib/mdx/read-mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { title, elements } = await getPostBySlug(slug).catch(() => {
    notFound();
  });
  return (
    <div>
      <h1 className="text-2xl text-blue-800">The title: {title}</h1>
      {elements}
    </div>
  );
}
