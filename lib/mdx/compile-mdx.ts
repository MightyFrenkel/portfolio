import { compileMDX } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { ComponentsConfig, FrontMatterFields } from "./mdx-config";

export async function getMdx(source: string) {
  return await compileMDX<FrontMatterFields>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight],
      },
    },
    components: ComponentsConfig,
  });
}