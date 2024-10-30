# Style guide

_"code is like steel and is less expensive to change while it's hot. A problem solved in production is many times more expensive than a problem solved in implementation, or a problem solved in design."_

## Safety

### Never nest your code

code should be easy to read from top to bottom. This way of programming is safer and will save your reader a future headache. For more info check <https://www.youtube.com/watch?v=CFRhGnuXG-4>

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

### Prefer functional programming whenever possible

The only exception would be when performance is the highest priority. Building a game or algorithm could be a good reason to not use functional programming. But by default, always go for functional programming. For more info check <https://www.youtube.com/watch?v=nuML9SmdbJ4>

### Single responsibility principle

A function should do one thing, and do it well. This will make your code easier to read and maintain.

## Developer experience

### Get the nouns and verbs just right

Great names are the essence of great code, they capture what a thing is or does, and provide a crisp, intuitive mental model. They show that you understand the domain. Take time to find the perfect name, to find nouns and verbs that work
together, so that the whole is greater than the sum of its parts.

### Write descriptive commit messages

Inform and delight the reader, because your commit messages are being read.

### Reduce comments you write for your code to a minimum

Maximize code documentation. Code that contains comments usually is a red flag for bad code. When your code needs explanation, this means it is probably to complicated. Comments also get outdated quickly. It is easy to forget to update the comment when changing the code. This way comments get outdated quickly as well.

```ts
// ❌ Avoid - This code is checking if a bird fits in your letterbox
if (a && checkThing() && c === 1 )

// ✅ - Explaination of your code is in the code itself
const birdFitsInLetterbox = a && checkThing() && c === 1;
if (birdFitsInLetterbox)
```

## Performance

### Think about performance from the outset, from the beginning

The best time to solve performance, to get the huge 1000x wins, is in the design phase, which is precisely when we can't measure or profile. It's also typically harder to fix a system after implementation and profiling, and the gains are less.

## Typescript specific rules

### Type Inference

As rule of thumb, explicitly declare a type when it help narrows it. Just because you don't need to add types, doesn't mean you shouldn't. In some cases explicit type declaration can increase code readability and intent.

```ts
// ❌ Avoid - Don't explicitly declare a type, it can be inferred.
const userRole: string = "admin"; // Type 'string'
const employees = new Map<string, number>([["Gabriel", 32]]);
const [isActive, setIsActive] = useState<boolean>(false);

// ✅ Use type inference.
const USER_ROLE = "admin"; // Type 'admin'
const employees = new Map([["Gabriel", 32]]); // Type 'Map<string, number>'
const [isActive, setIsActive] = useState(false); // Type 'boolean'

// ❌ Avoid - Don't infer a (wide) type, it can be narrowed.
const employees = new Map(); // Type 'Map<any, any>'
employees.set("Lea", 17);
type UserRole = "admin" | "guest";
const [userRole, setUserRole] = useState("admin"); // Type 'string'

// ✅ Use explicit type declaration to narrow the type.
const employees = new Map<string, number>(); // Type 'Map<string, number>'
employees.set("Gabriel", 32);
type UserRole = "admin" | "guest";
const [userRole, setUserRole] = useState<UserRole>("admin"); // Type 'UserRole'
```

### Const Assertion

Strive to use const assertion as const:

- type is narrowedobject
- object gets readonly properties
- array becomes readonly tuple

```ts
// ❌ Avoid declaring constants without const assertion
const FOO_LOCATION = { x: 50, y: 130 }; // Type { x: number; y: number; }
FOO_LOCATION.x = 10;

const BAR_LOCATION = [50, 130]; // Type number[]
BAR_LOCATION.push(10);

const RATE_LIMIT = 25;
const RATE_LIMIT_MESSAGE = `Max number of requests/min is ${RATE_LIMIT}.`; // Type string

// ✅ Use const assertion
const FOO_LOCATION = { x: 50, y: 130 } as const; // Type '{ readonly x: 50; readonly y: 130; }'
FOO_LOCATION.x = 10; // Error

const BAR_LOCATION = [50, 130] as const; // Type 'readonly [10, 20]'
BAR_LOCATION.push(10); // Error

const RATE_LIMIT = 25;
const RATE_LIMIT_MESSAGE =
  `Max number of requests/min is ${RATE_LIMIT}.` as const; // Type 'Rate limit exceeded! Max number of requests/min is 25.'
```

### Type Union & Boolean Flags

Strive to use type union variable instead multiple boolean flag variables.

Flags tend to compound over time and become hard to maintain, since they hide the actual app state.

```ts
// ❌ Avoid introducing multiple boolean flag variables
const isPending, isProcessing, isConfirmed, isExpired;

// ✅ Use type union variable
type UserStatus = "pending" | "processing" | "confirmed" | "expired";
const userStatus: UserStatus;
```

### Named exports

Always use named exports over default exports. Named exports are more explicit and can be easily refactored.

## React specific rules

- useEffect should not be used to listen to variable changes, and should (almost) never set a state. This will result is a useEffect hell that is difficult to debug. When you want to listen to changes, do it based on user actions like a onClick. It is better to think of the useEffect hook as a useSideEffect hook, you use it when a side effect happens. This could be because of event listeners that trigger with for example user input, or when the browser is done fetching data. <https://www.youtube.com/watch?v=bGzanfKVFeU>

## Inspiration

<https://mkosir.github.io/typescript-style-guide/>
<https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TIGER_STYLE.md_"code>

```

```
