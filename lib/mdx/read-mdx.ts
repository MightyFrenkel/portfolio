import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  return readFileSync(fullPath, "utf8");
}
export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => ({ content: getPostBySlug(slug), slug }));
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
export async function generateStaticParams() {
  const slugs = getPostSlugs();

  return slugs.map((slug) => {
    return {
      slug,
    };
  });
}
