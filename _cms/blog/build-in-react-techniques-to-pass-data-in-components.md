---
title: Build in react techniques to pass data
description: An overview of when to use different techniques to pass data in react.
date: 2023-07-01
---
As React developers, we often encounter scenarios where we need to pass data between components efficiently. In this blog post, we will explore various techniques for data flow in React components, including providers, prop drilling, portals, and more. Understanding these methods will help you choose the most suitable approach for your specific use cases, ensuring a robust and scalable application architecture.

## Build in react methods
React has several build in ways to pass data to other components, my recommendation would be to always first check if you can use a build in method, before switching to an external library.

First I will give a quick overview which technique to use when, afterwards we will go more in depth for each of the techniques.

**When to Use and When Not to Use:**

- React Props:
	- When to use: When passing data and behaviour down the component tree from a parent to child components.
	- When not to use: When dealing with deeply nested components and excessive prop drilling becomes cumbersome.

- Context API and Provider:
	- When to use: When you have data or state that needs to be accessible by multiple components without passing props explicitly at each level.
	- When not to use: When the data is only needed within a small portion of the component tree and passing props is feasible.

- React Portals:
	- When to use: When you need to render a component outside its parent's DOM hierarchy, such as modals or overlays.
	- When not to use: When rendering a component within the parent's DOM hierarchy is sufficient and there's no need to break out of the component tree structure.

## React Props

```tsx
// ParentComponent.tsx
import React from 'react';
import ChildComponent from './ChildComponent';

export const ParentComponent: React.FC = () => {
  const name = 'Frank Hartman';

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent name={name} />
    </div>
  );
};
```

In the above code, the `ParentComponent` renders the `ChildComponent` and passes the `name` prop with the value "Frank Hartman".

Now, let's take a look at the `ChildComponent`:

```tsx
// ChildComponent.tsx
import React from 'react';

interface Props {
  name: string;
}

export const ChildComponent = ({ name }: Props) => {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Hello, {name}!</p> // Hello, Frank Hartman
    </div>
  );
};
```

The `ChildComponent` receives the `name` prop and renders a greeting message using the received name.

## Context API and Providers
First, we'll create a context to hold the data. Create a new file called `MyContext.tsx`:

```tsx
// MyContext.tsx
import React from 'react';

interface MyContextType {
  name: string;
  age: number;
}

export const MyContext = React.createContext<MyContextType | null>(null);

```

In the above code, we define a context called `MyContext` using `React.createContext`. We also provide the type `MyContextType` that represents the shape of the data we want to pass through the context.

```tsx
// App.tsx
import React from 'react';
import ChildComponent from './ChildComponent';
import MyContext from './MyContext';

export const ParentComponent = () => {
  const contextValue: MyContextType = {
    name: 'Frank Hartman',
    age: 26,
  };

  return (
    <div>
      <h2>App Component</h2>
      <MyContext.Provider value={contextValue}>
        <ChildComponent />
      </MyContext.Provider>
    </div>
  );
};
```

In the `ParentComponent`, we define the `contextValue` object that holds the data we want to pass through the context. We then wrap the `ChildComponent` with the `MyContext.Provider` component and provide the `contextValue` as the `value` prop.

Now, let's see how the `ChildComponent` can consume the data from the context:
```tsx
// ChildComponent.tsx
import React, { useContext } from 'react';
import MyContext from './MyContext';

const ChildComponent = () => {
  const contextValue = useContext(MyContext);
  if (!contextValue) return <p>No provider was found </p>

  return (
    <div>
      <h3>Child Component</h3>
      <p>
        Hello, {contextValue.name}! You are {contextValue.age} years old.
      </p>
    </div>
  );
};

```

In the `ChildComponent`, we import the `useContext` hook from React and pass in the `MyContext` to retrieve the context data. The `contextValue` will contain the value provided by the `MyContext.Provider` in the parent component.

## React portals
```tsx
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalContent } from './ModalContent.js';

export const PortalExample = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )} // The ModalContent will be rendered in <body>
    </>
  );
}

```

The `createPortal` function takes two arguments: the first argument is the content to be rendered (in this case, the `ModalContent` component), and the second argument is the target DOM node where the content should be rendered (in this case, `document.body`).