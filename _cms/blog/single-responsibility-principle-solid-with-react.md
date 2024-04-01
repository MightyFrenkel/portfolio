---
title: Single Responsibiltiy Principle - Solid React Part 1
description: A guide to refactoring with SRP
date: 2024-03-31
---


In software development, SOLID principles are a set of five design principles that help create more maintainable, flexible, and scalable code. When it comes to working with React, applying these principles can lead to better component design and cleaner code that is easier to understand and extend.

## Introduction to SOLID Principles
SOLID is an acronym that stands for:
- S - Single Responsibility Principle (SRP)
- O - Open/Closed Principle
- L - Liskov Substitution Principle
- I - Interface Segregation Principle
- D - Dependency Inversion Principle

In this blog post, we will focus on the **Single Responsibility Principle (SRP)** and demonstrate how to refactor a simple React component to adhere to this principle.

## Understanding the Single Responsibility Principle (SRP)

The Single Responsibility Principle states that a class should have only one reason to change. In the context of React components, this means that each component should have a single responsibility or task that it is responsible for. By dividing the functionality into smaller, more focused units, we can improve code readability, reusability, and maintainability.

## Refactoring code to Follow SRP

Let’s consider a basic example of a React component that manages a counter and handles both state management and logging within the component itself:



<Sandpack template="react" files={{
"/App.js": {
code: `
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        logCount();
    };

    const decrement = () => {
        setCount(count - 1);
        logCount();
    };

    const logCount = () => {
        console.log("Current count: " + count);
    };

    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    );
};
export default Counter;
`,
},

}}
/>

In the above code, the Counter component is responsible for both managing the count state and handling logging, violating the SRP. To address this, we can refactor the code by extracting the state management and logging functionalities into separate modules.

```tsx
// ./use-counter.tsx
import { useState } from 'react';
import { logCount } from './logger.js'

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    logCount(count + 1); // Logging count
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    logCount(count - 1); // Logging count
  };

  return { count, increment, decrement };
};

export default useCounter;
```

```ts
// ./logger.js
export const logCount = (count) => {
  console.log("Current count: " + count);
};
```


<Sandpack template="react" files={{
"/App.js": {
code: `import React from 'react';
import useCounter from './use-counter'; // Custom hook for state management

const Counter = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
`,
},

"/use-counter.js": {
code: `import { useState } from 'react';
import { logCount } from './logger.js'

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    logCount(count + 1); // Logging count
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
    logCount(count - 1); // Logging count
  };

  return { count, increment, decrement };
};

export default useCounter;

`,
},
"logger.js": {
code: `
export const logCount = (count) => {
  console.log("Current count: " + count);
};

`
},

}}
/>

By refactoring the code in this manner, we have separated the concerns of state management and logging, adhering to the SRP. The Counter component now focuses solely on rendering the UI and interacting with the custom hook for state management.

This will also greatly help with the testability of this code. It is much easier to unit test smaller chunks of code.

# Conclusion
Incorporating SOLID principles, such as the Single Responsibility Principle, in your React applications can lead to more modular, maintainable, and scalable code. By practicing good design principles, you can enhance the quality and longevity of your software projects. Refactoring code to follow SRP is just one example of how applying SOLID can improve the structure and clarity of your React components.
