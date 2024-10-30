# Style guide

_"code is like steel and is less expensive to change while it's hot. A problem solved in production is many times more expensive than a problem solved in implementation, or a problem solved in design."_

## Safety

- Never nest your code, code should be easy to read from top to bottom. This way of programming is safer and will save your reader a future headache. For more info check <https://www.youtube.com/watch?v=CFRhGnuXG-4>

```ts
// Do not do this
if (isOpen) {
  if (checkProperty()) {
    if (a === true && b === true) {
      doStuff();
    }
  } else {
    doOtherStuff();
  }
}

// Do this
if (!isOpen) return;

if (!checkProperty()) {
  doOtherStuff();
  return;
}

if (a !== true) return;

if (b !== true) return;

doStuff();
```

- Prefer functional programming whenever possible. The only exception would be when performance is the highest priority. Building a game could be a good reason to not use functional programming. But by default, always go for functional programming. For more info check <https://www.youtube.com/watch?v=nuML9SmdbJ4>

## Developer experience

- **Get the nouns and verbs just right.** Great names are the essence of great code, they capture what a thing is or does, and provide a crisp, intuitive mental model. They show that you understand the domain. Take time to find the perfect name, to find nouns and verbs that work
  together, so that the whole is greater than the sum of its parts.
- **Write descriptive commit messages** that inform and delight the reader, because your commit messages are being read.
- Reduce comments you write for your code to a minimum. And maximize code documentation. Code that contains comments usually is a red flag for bad code. When your code needs explanation, this means it is probably to complicated. Comments also get outdated quickly. It is easy to forget to update the comment when changing the code. This way comments get outdated quickly as well.

```ts

// Do not do this
// This code is checking if a bird fits in your letterbox
if (a && checkThing() && c === 1 )


// Do this
// Explaination of your code is in the code itself
const birdFitsInLetterbox = a && checkThing() && c === 1;
if (birdFitsInLetterbox)
```

## Performance

- Think about performance from the outset, from the beginning. **The best time to solve performance, to get the huge 1000x wins, is in the design phase, which is precisely when we can't measure or profile.** It's also typically harder to fix a system after implementation and profiling, and the gains are less. So you have to have mechanical sympathy. Like a carpenter, work with the grain.

## React specific rules

- useEffect should not be used to listen to variable changes, and should (almost) never set a state. This will result is a useEffect hell that is difficult to debug. When you want to listen to changes, do it based on user actions like a onClick. It is better to think of the useEffect hook as a a useSideEffect hook, you use it when a side effect happens. This could be because of event listeners that trigger with for example user input, or when the browser is done fetching data. <https://www.youtube.com/watch?v=bGzanfKVFeU>

## Inspiration

<https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TIGER_STYLE.md_"code> is like steel and is less expensive to change while it's hot. A problem solved in production is many times more expensive than a problem solved in implementation, or a problem solved in design."\_
