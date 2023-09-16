import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ComponentsConfig, FrontMatterFields } from "./mdx-config";

export async function getMdx(source: string) {
  return await compileMDX<FrontMatterFields>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight, rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
    },
    components: ComponentsConfig as any,
  });
}
