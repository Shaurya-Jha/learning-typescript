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

# Typescript number

All numbers in typescript are either floating-point values or big integers. The floating-point numbers have the type ``number`` while the big integers get the type ``bigint``.

```javascript
let price: number;

// initialize the price variable to a number
let price = 9.95;
```

# Typescript string

Typescript also supports template strings that use the backtick(`) to surround characters.

# Typescript Boolean

Typescript boolean has two values: ``true`` and ``false``. The boolean type is one of the primitive types in typescript.

```javascript
let pending: boolean;
pending = true;

// after a while
pending = false;
```

### Boolean operator

To manipulate boolean values, you use the boolean operators. They are as follows - 

- AND - &&
- OR - ||
- NOT - !

# Typescript object type

The typescript ``object`` type represents all values that are not in primitive types.

The following code shows how to declare a variable that holds and object:

```javascript
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web developer'
};

console.log(employee);
```