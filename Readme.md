# Introduction to typescript

- Typescript is a superset of Javascript
- Built on top of Javascript
- The typescript code is compiled into plain javascript code using Typescript compiler
- Typescript extension is .ts
- TYPESCRIPT => TYPESCRIPT COMPILER => JAVASCRIPT

# Need for Typescript

1. improves your productivity while helping avoid bugs
2. brings future javascript to today

# Tools needed for typescript enviroment

- Node.js
- Typescript compiler : ts-node
- code editor

# Types in typescript

1. Primitive types
    - string : represents text data
    - number : represents numeric data
    - boolean : has true or false values
    - null : has one value i.e null
    - undefined : has one value - undefined. It is a default value of an uninitialized variable
    - symbol : represents a unique constant value

2. Object types
    - functions
    - arrays
    - classes
    - etc

# Type Annotation

### What is type annotation in typescript ?
- Typescript uses type annotations to explicitly specify types for identifiers such as variables, function, objects, etc

- Typescript uses the syntax :type after an identifier as the type annotation, which type can be any valid type

### Type annotations in variables and constants

```javascript
let variable: type;
let variable: type = value;
const constant: type = value;

let counter: number = 1;
let name: string = 'John Doe'
let isLoggedIn: boolean = false;

// array annotation
let names: string[] = ['John','Jane','Peter', 'David','Mary'];

// objects annotation
let person : {
    name: string;
    age: number
};

// declaring the values for the fields
person = {
    name: 'John',
    age: 25
};      // valid
```

# Typescript type inference

- Type inference describes where and how Typescript infers types when you don't explicitly annotate them.

### Basic type inference

When you declare a variable , you can use a type annotation to explicitly specify a type for it.

Example -
```javascript
let counter: number;
```

### Contextual typing

Typescript uses the location of variables to infer their types. This mechanism is known as contextual typing.

### Type inference v/s Type annotations

The main difference we can say, between type inference and type annotation is that - 

- type inference guesses the type on it's own while in type annotation we explicitly tell typescript the type 