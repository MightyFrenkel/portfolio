import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { getMdx } from "./compile-mdx";
import { CMS_PATH, Post } from "./mdx-config";

const postsDirectory = join(process.cwd(), CMS_PATH);

export function getPostSlugs() {
  return readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  const data = readFileSync(fullPath, "utf8");
  const mdx = await getMdx(data);

  return {
    elements: mdx.content,
    slug: realSlug,
    description: mdx.frontmatter.description,
    title: mdx.frontmatter.title,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts: Post[] = [];
  for await (const slug of slugs) {
    const post = await getPostBySlug(slug);
    posts.push(post);
  }
  return posts;
}
