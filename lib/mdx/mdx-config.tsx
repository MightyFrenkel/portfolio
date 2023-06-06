import { Text } from "@/components/text";

export interface FrontMatterFields {
  title: string;
  description: string;
  date: Date;
}

export interface Post extends FrontMatterFields {
  slug: string;
  elements: React.ReactElement;
}

export const ComponentsConfig = {
  h1: (props: any) => <Text.h1 {...props} />,
  h2: (props: any) => <Text.h2 {...props} />,
  h3: (props: any) => <Text.h3 {...props} />,
  p: (props: any) => <Text.p {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside py-2" {...props} />,
  pre: (props: any) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-700 " />
  ),
};

export const CMS_PATH = "_cms/blog";
