import React, { HTMLAttributes } from "react";
import { TEXT_STYLES } from "./config";

type TextElement = "h1" | "h2" | "h3" | "h4" | "p";
type TextType = HTMLAttributes<HTMLElement>;

export interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  tag: TextElement;
}

export const Text = ({ tag, children, ...props }: TextProps) => {
  const Element = TEXT_STYLES[tag];

  return <Element {...props}>{children}</Element>;
};

Text.h1 = (props: TextType) => <Text tag="h1" {...props} />;

Text.h2 = (props: TextType) => <Text tag="h2" {...props} />;

Text.h3 = (props: TextType) => <Text tag="h3" {...props} />;

Text.h4 = (props: TextType) => <Text tag="h4" {...props} />;

Text.p = (props: TextType) => <Text tag="p" {...props} />;
