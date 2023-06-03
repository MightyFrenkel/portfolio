import type { MDXComponents } from "mdx/types";
import { CodeHeader } from "./components/code-header";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-4xl" {...props} />,
    pre: (props) => (
      <pre {...props} className="rounded-lg border-2 border-zinc-500 p-4" />
    ),
    CodeHeader: CodeHeader,
    ...components,
  };
}
