import React, { HTMLAttributes } from "react";
import { roboto_mono } from "../fonts";

type TextElement = "h1" | "h2" | "h3" | "h4" | "p";
type TextType = HTMLAttributes<HTMLElement>;

export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  tag: TextElement;
}

const textStyles: Record<
  TextElement,
  ({ children }: TextType) => React.ReactNode
> = {
  h1: (props) => (
    <h1 className={`${roboto_mono.className} text-4xl font-bold`} {...props} />
  ),
  h2: (props) => (
    <h2
      className={`${roboto_mono.className} text-3xl font-bold text-clementine`}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={`${roboto_mono.className} text-2xl font-bold text-violet-400`}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={`${roboto_mono.className} text-xl font-bold text-violet-300`}
      {...props}
    />
  ),
  p: (props) => <p className="text-lg font-light" {...props} />,
};

export const Text = ({ tag, children, ...props }: TextProps) => {
  const Element = textStyles[tag];

  return <Element {...props}>{children}</Element>;
};

Text.h1 = (props: TextType) => <Text tag="h1" {...props} />;

Text.h2 = (props: TextType) => <Text tag="h2" {...props} />;

Text.h3 = (props: TextType) => <Text tag="h3" {...props} />;

Text.h4 = (props: TextType) => <Text tag="h4" {...props} />;

Text.p = (props: TextType) => <Text tag="p" {...props} />;
