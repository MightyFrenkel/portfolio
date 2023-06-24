// components/sandpack-styles.tsx
"use client";

import {
  Sandpack,
  SandpackProps,
  getSandpackCssText,
} from "@codesandbox/sandpack-react";
import { useServerInsertedHTML } from "next/navigation";

/**
 * Ensures CSSinJS styles are loaded server side.
 */
export const SandPackCSS = () => {
  useServerInsertedHTML(() => {
    return (
      <style
        dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
        id="sandpack"
      />
    );
  });
  return null;
};

export const SandPack = ({ ...props }: SandpackProps) => (
  <Sandpack
    template="react"
    theme="dark"
    options={{
      showNavigator: false,
    }}
    {...props}
  />
);
