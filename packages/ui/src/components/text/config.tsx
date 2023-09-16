import { TextElement, TextType } from "./types";

export const TEXT_STYLES: Record<
  TextElement,
  ({ children }: TextType) => React.ReactNode
> = {
  h1: (props) => <h1 className={` text-4xl font-bold`} {...props} />,
  h2: (props) => (
    <h2 className={`  text-3xl font-bold text-clementine`} {...props} />
  ),
  h3: (props) => (
    <h3 className={` text-2xl font-bold text-violet-400`} {...props} />
  ),
  h4: (props) => (
    <h4 className={` text-xl font-bold text-violet-300`} {...props} />
  ),
  p: (props) => <p className="text-lg font-light" {...props} />,
};
