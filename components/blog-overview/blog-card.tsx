import { Post } from "@/lib/mdx/mdx-config";
import Link from "next/link";

export interface BlogCardProps {
  post: Post;
}
export function BlogCard({
  post: { slug, description, title },
}: BlogCardProps) {
  return (
    <Link
      className="col-span-1 backdrop-blur-md bg-black/30 px-6 py-4 h-44 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-black/50"
      key={slug}
      href={`/blog/${slug}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="font-light h-full">{description}</p>
    </Link>
  );
}
