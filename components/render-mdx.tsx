// components/mdx-remote.js
import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeHeader } from "./code-header";

const components = {
  h1: (props: any) => <h1 className="text-4xl" {...props} />,
  pre: (props: any) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-500 p-4" />
  ),
  CodeHeader: CodeHeader,
};
export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
