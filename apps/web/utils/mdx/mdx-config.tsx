import { SandPack } from "@/components/sandpack";
import { HTMLAttributes } from "react";

export interface FrontMatterFields {
  title: string;
  description: string;
  date: Date;
}

export interface Post extends FrontMatterFields {
  slug: string;
  elements: React.ReactElement;
}

type TextType = HTMLAttributes<HTMLElement>;

export const ComponentsConfig = {
  pre: (props: TextType) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-700 " />
  ),
  Sandpack: (props: TextType) => <SandPack {...props} />,
};

export const CMS_PATH = "../../_cms/blog";
