import { Post } from "@/lib/mdx/mdx-config";
import Link from "next/link";
import { Text } from "../text";

export interface BlogCardProps {
  post: Post;
}
export function BlogCard({
  post: { slug, description, title, date },
}: BlogCardProps) {
  return (
    <Link
      className="flex flex-col backdrop-blur-md bg-white/50 dark:bg-black/30 px-6 py-4 h-52 rounded-lg transition-transform duration-200 ease-in-out transform lg:hover:scale-105 "
      key={slug}
      href={`/blog/${slug}`}
    >
      <Text.h3>{title}</Text.h3>
      <div className="pt-4">
        <Text.p>{description}</Text.p>
      </div>
      <div className="mt-auto flex">
        <Text.p>Read more</Text.p>
        <div className="ml-auto">
          <Text.p>{date.toDateString()}</Text.p>
        </div>
      </div>
    </Link>
  );
}
