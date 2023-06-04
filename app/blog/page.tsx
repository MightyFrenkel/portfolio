import { getAllPosts } from "@/lib/mdx/read-mdx";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4">
        {posts.map(({ slug, description, title }) => {
          return (
            <Link
              className="col-span-1 backdrop-blur-md bg-black/30 px-6 py-4 h-32 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-black/50"
              key={slug}
              href={`/blog/${slug}`}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="font-light">{description}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
