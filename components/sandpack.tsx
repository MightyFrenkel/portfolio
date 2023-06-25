"use client";

import { useMounted } from "@/hooks/use-audio-effect/use-mounted";
import {
  Sandpack,
  SandpackProps,
  getSandpackCssText,
} from "@codesandbox/sandpack-react";
import { useServerInsertedHTML } from "next/navigation";
import { use, useEffect, useState } from "react";

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

export const SandPack = ({ ...props }: SandpackProps) => {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <Sandpack
      template="react"
      theme="auto"
      options={{
        showNavigator: false,
      }}
      {...props}
    />
  );
};
