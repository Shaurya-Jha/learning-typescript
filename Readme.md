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

``
let variable: type;
let variable: type = value;
const constant: type = value;
``

- Example - 
