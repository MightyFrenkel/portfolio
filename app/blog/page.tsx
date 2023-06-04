import { getAllPosts } from "@/lib/mdx/read-mdx";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <h1>blog </h1>
      <div className="flex flex-col space-y-4">
        {posts.map(({ slug, description, title }) => {
          return (
            <>
              <Link
                className="font-bold text-blue-600"
                href={`/blog/${slug}`}
                key={slug}
              >
                {title}
              </Link>
              {description}
            </>
          );
        })}
      </div>
    </>
  );
}
