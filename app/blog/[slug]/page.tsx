import { getMdx } from "@/lib/mdx/render-mdx";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx/read-mdx";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => {
    return {
      slug,
    };
  });
}

export default async function Page({
  params,
}: {
  params: { slug: string; content: string };
}) {
  const slug = params?.slug;

  const source = getPostBySlug(slug);
  const { content, frontmatter } = await getMdx(source);
  return (
    <div>
      <h1 className="text-2xl text-blue-800">The title: {frontmatter.title}</h1>
      {content}
    </div>
  );
}

//https://github.com/vercel/next.js/tree/canary/examples/blog-starter
