export interface FrontMatterFields {
  title: string;
  description: string;
}

export interface Post extends FrontMatterFields {
  slug: string;
  elements: React.ReactElement;
}

export const ComponentsConfig = {
  h2: (props: any) => <h2 className="text-4xl pt-8" {...props} />,
  p: (props: any) => <p className="py-2" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside py-2" {...props} />,
  pre: (props: any) => (
    <pre {...props} className="rounded-lg border-2 border-zinc-700 " />
  ),
};

export const CMS_PATH = "_cms/blog";
