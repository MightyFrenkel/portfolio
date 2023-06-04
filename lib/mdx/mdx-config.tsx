import { CompileMDXResult } from "next-mdx-remote/rsc";

export interface FrontMatterFields {
  title: string;
  description: string;
}

export interface Post extends FrontMatterFields {
  slug: string;
  mdx: CompileMDXResult<FrontMatterFields>;
  elements: React.ReactElement;
}

export const ComponentsConfig = {
  h2: (props: any) => <h2 className="text-4xl" {...props} />,
  pre: (props: any) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-500 p-4" />
  ),
};

export const CMS_PATH = "_cms/blog";
