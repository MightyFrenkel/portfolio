import { getAllPosts } from "@/lib/mdx/read-mdx";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <h1>blog </h1>
      <div className="flex flex-col space-y-4">
        {posts.map((post) => {
          return (
            <Link
              className="font-bold text-blue-600"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              {post.slug}
            </Link>
          );
        })}
      </div>
    </>
  );
}
