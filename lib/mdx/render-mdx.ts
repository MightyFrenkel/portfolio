import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export async function getMdx(source: string) {
  return await compileMDX<{ title: string }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
  });
}
