import { Post } from "@/utils/mdx/mdx-config";
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
      className="flex flex-col backdrop-blur-md bg-black/30 px-3 md:px-6 py-4 min-h-[13rem] rounded-lg"
      key={slug}
      href={`/blog/${slug}`}
    >
      <Text.h3>{title}</Text.h3>
      <div className="pt-4">
        <Text.p>{description}</Text.p>
      </div>
      <div className="mt-auto flex pt-2">
        <Text.p>Read more</Text.p>
        <div className="ml-auto">
          <Text.p>{date.toDateString()}</Text.p>
        </div>
      </div>
    </Link>
  );
}
