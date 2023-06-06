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

  const { title, elements } = await getPostBySlug(slug).catch(() => {
    notFound();
  });
  return (
    <div className="px-4 py-4 mt-4 backdrop-blur-md bg-black/50 rounded-lg flex flex-col gap-12">
      <h1 className="text-3xl font-bold pb-8">The title: {title}</h1>
      {elements}
    </div>
  );
}
