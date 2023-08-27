import { SandPack } from "@/components/sandpack";
import { Text } from "@/components/text";
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
  h1: (props: TextType) => <Text.h1 {...props} />,
  h2: (props: TextType) => <Text.h2 {...props} />,
  h3: (props: TextType) => <Text.h3 {...props} />,
  pre: (props: TextType) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-700 " />
  ),
  Sandpack: (props: TextType) => <SandPack {...props} />,
};

export const CMS_PATH = "../../_cms/blog";
