---
title: hi
description: bye
date: 2023-06-02
---

When working with React components styled using Tailwind CSS, it's common for the code to become unwieldy and difficult to manage. Let's take a look at an example:

```tsx
<Link
  className="flex flex-col backdrop-blur-md bg-black/30 px-6 py-4 h-44 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 hover:bg-black/50"
  href="/link"
>
  link
</Link>
```

To address this issue, we can leverage the power of TypeScript to create reusable and type-safe classes.

First, let's define a type for the tag elements we want to create reusable components for. Create a new file called `text.tsx`:

```tsx
type TextElement = "h1" | "h2" | "h3" | "p";
```

This union type will ensure that each tag element has a corresponding React element bound to it.

Next, let's create a `Record` that binds each tag to a JSX element for rendering text:

```tsx
const textStyles: Record<
  TextElement,
  ({ children }: { children: React.ReactNode }) => React.ReactNode
> = {
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold" {...props} />,
  p: (props) => <p className="font-light" {...props} />,
};
```

We can now dynamically use this `Record` to render text elements.

```tsx
type TextElement = "h1" | "h2" | "h3" | "p";

const textStyles = Record<...>

export const Text = ({ tag, children }: TextProps) => {
  const Element = textStyles[tag];
  return <Element>{children}</Element>;
};
```

With this new `Text` component, we can use it as follows:

```tsx
export function SomeComponent() {
  return <Text tag="h1">Hello world</Text>;
}
```

Now, whenever we update the styling of the `h1` header using Tailwind CSS, it will be automatically reflected in every instance where the `Text` component is used.

## Compound components

To take this a step further, we can utilize a pattern called compound components. This pattern helps alleviate the burden of typing out union types. We can achieve this by extending the `Text` component:

```tsx
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
```

Now, we can use specific presets on the `Text` component like this:

```tsx
export function SomeComponent() {
  return <Text.h1>Hello world</Text>;
}
```

By following this approach, we can create reusable and type-safe React components styled with Tailwind CSS, making it easier to manage and update the styling throughout the application.
