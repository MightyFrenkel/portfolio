---
title: Trying Out Test-Driven Development (TDD) in React, A Casual Exploration 
description: Casual exploration of TTD with React and Jest 
date: 2023-09-05
---

Hey there, fellow developers! Today, I want to share my journey of dipping my toes into the world of Test-Driven Development (TDD) with React. If you're like me, you might have been a bit skeptical about using TDD in front-end development. Backend, sure, it makes sense, but React? Let's talk about that!

## The Front-End Puzzle

Front-end development has its quirks, doesn't it? Unlike the clear-cut world of backend development, where you often know exactly what to expect from an API, the front-end is like a wild adventure. There are so many moving parts, side effects, and browser shenanigans to deal with. This has left me wondering: Does TDD really fit in here?

## TDD: The Mini-Component MVP

TDD shines when you're dealing with smaller React components. It's like having a superpower, especially when you're tweaking and improving code. Imagine you're working on various button components.

Here is a super small example which will give an idea on how to apply TTD for a simply button component. Start of by writing a simple test first, this test was made with jest:

```tsx
// button.test.tsx
import { render, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button Component", () => {
  it("calls onClick when clicked", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button onClick={onClickMock} label="Click me" />
    );
    const button = getByTestId("custom-button");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
```

You can keep your tests running while making changes using a simple command:

```shell
yarn jest --watch button
```

This means you can refactor and tinker with confidence, knowing that your tests will catch any slip-ups along the way. For now it will fail of course, lets build the actual button component.

```tsx
// button.tsx
interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button onClick={onClick} data-testid="custom-button">
      {label}
    </button>
  );
};

export default Button;
```

And tadaaa, your test will pass!

## When TDD Feels Like a Buzzkill

Now, let's talk about the reality check. Front-end work isn't just about writing functions. It's about crafting a beautiful, functional user interface. Sometimes, you just want to shuffle things around, see what sticks, split your code, and rename variables to make it all cleaner. And here's where TDD can feel like a party pooper.

Why? Because when you're reorganizing your project, you also have to update your tests to match your code changes. It's all too easy to forget those tests when you're in the flow of making things look pretty.

Finding a smooth workflow that balances TDD with creative project restructuring? Well, that's a challenge that's still on my to-do list.

## TDD in React: Step by Step

If you're willing to give TDD in React a shot, here's a laid-back, step-by-step approach:

1. **Know What You Want**: Get super clear on what you want your React component to do. What's the goal? What's the acceptance criteria? Knowing this is your roadmap.
2. **Start with Some Tests**: Write some basic unit tests that cover what you expect from your component. These are like your guardrails.
3. **Stay Watchful**: Use tools like Jest with the `--watch` option to keep your tests running as you code. At first, they'll fail because you haven't written the component yet.
4. **Build Your Component**: Now's the time to bring your component to life based on your initial tests. Make it work!
5. **More Tests, More Confidence**: Once your component is in action, revisit your tests. Add more test cases to catch those sneaky bugs you might have missed earlier.
6. **Tidy Up and Refactor**: Don't forget to clean up your code and make it shiny. Good code is as much about readability as functionality. You test will let you know if you actually broke something wile refactoring
7. **Repeat the Dance**: Rinse and repeat these steps for your next component. Keep that TDD cycle going!

### Conclusion

TDD in React is like a trusty sidekick—it has its moments of glory, especially with smaller components, but it can feel a bit out of place when you're reshaping your project. The key is to experiment and adapt your approach to suit your project's unique needs. So, give it a whirl, and find your own rhythm between TDD and the ever-evolving world of front-end development.
