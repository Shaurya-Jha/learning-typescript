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

# Typescript array type

A Typescript ``array`` is an ordered list of data. To declare an array that holds values of a specific type, use the following syntac:

```javascript
let arrayName: type[];

// for string type array - this will carry array of only string type
let skills: string[];

// to add values to this array we can do this -
skills[0] = 'Problem solving';
skills[1] = 'Programming';
```

# Typescript tuples

A tuple works like an array with some additional considerations:

- The number of elements in the tuple is fixed.
- The types of elements are known, and need not to be the same.

```javascript
let skill: [string, number];
skill = ["Programming", 5];
```

> The order of values in a tuple is important. If you change the order of values of the ``skill`` tuple to ``[5, "programming"]``, you'll get an error.

### Optional tuple elements

You can have optional elements specified using the question mark (?) postfix.

```javascript
let bgColor, headerColor: [number, number, number, number?];

bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
```

# Enum

An enum is a group of names constant values. Enum stands for enumerated type.

To define an enum, you follow these steps: 

- First, use the ``enum`` keyword followed by the name of the enum
- Then, define constant values for the enum.

```javascript
enum name {constant1, constant2, ...};
```

### When to use enum

You should use an enum when you:
    - have a small set of fixed values that are closely related.
    - and these values are known at compile time.

# Typescript any type

Sometimes, you may need to store a value in a variable. But you don't know it's type at the time of writing the program. And the unknown value may come from a third-party API or user input.

In this case, you want to opt out of the type checking and allow the values to pass through the compile-time check.

To do so, you use the ``any`` type. The ``any`` type allows you to assign a value of any type to a variable.

```javascript
let result: any;

// store number
result = 10;
console.log(typeof(result));

// store string
result = "Any type in typescript";
console.log(typeof(result));

// store boolean
result = true;
console.log(typeof(result));
result = false;
console.log(typeof(result));
```