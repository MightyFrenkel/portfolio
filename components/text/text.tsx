import React from "react";

type TextElement = "h1" | "h2" | "h3" | "p";

export interface TextProps {
  tag: TextElement;
  children: React.ReactNode;
}

const textStyles: Record<
  TextElement,
  ({ children }: { children: React.ReactNode }) => React.ReactNode
> = {
  h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
  h2: (props) => (
    <h2 className="text-3xl font-bold text-orange-400 " {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-bold text-purple-400" {...props} />
  ),
  p: (props) => <p className="text-lg font-light" {...props} />,
};

export const Text = ({ tag, children }: TextProps) => {
  const Element = textStyles[tag];
  return <Element>{children}</Element>;
};

Text.h1 = (props: { children: React.ReactNode }) => (
  <Text tag="h1" {...props} />
);

Text.h2 = (props: { children: React.ReactNode }) => (
  <Text tag="h2" {...props} />
);

Text.h3 = (props: { children: React.ReactNode }) => (
  <Text tag="h3" {...props} />
);

Text.p = (props: { children: React.ReactNode }) => <Text tag="p" {...props} />;
