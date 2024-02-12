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

# Typescript void type

The ``void`` type denotes the absence of having any type at all. It is a little like the opposite of the ``any`` type.

> Typically, you use the ``void`` type as the return type of functions that do not return a value. For example:

```javascript
function log(message): void{
    console.log(message);
}
```

> It is a good practice to add the ``void`` type as the return type of a function or a method that doesn't return any value.

```javascript
let useless: void = undefined;
useless = 1;        // error
```

# Type aliases

Type aliases allow you to create a new name for an existing type. The following shows the syntax of the type alias:

```javascript
// syntax
type alias = existingType;

// creating custom type alias
type chars = string;
let message: chars;     // same as string type
```

It's useful to create type aliases for union types. For example:

```javascript
type alphanumeric = string | number;

let input: alphanumeric;

input = 100;        // valid
input = 'Hi';       // valid
input = false;      // false - as the alphanumeric type doesn't have boolean in union type
```

# Control flow statements

## If-else

1. Simple if statement

```javascript
const max = 100;
let counter = 0;

if(counter < max) {
    counter++;
}

console.log(counter);
```

2. if...else statement

```javascript
// syntax
if(condition){
    // some action
} else {
    // other actions
}

// Example -
const max = 100;
let counter = 100;

if(counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);
```

3. with ternary operator

```javascript
const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

console.log(counter);
```

4. if...else if..else

```javascript
let discount: number;
let itemCount = 11;

if(itemCount > 0 && itemCount <= 5) {
    discount = 5;       // 5% discount
} else if(itemCount > 5 && itemCount <=10) {
    discount = 10;      // 10% discount
} else {
    discount = 15;      // 15% discount
}

console.log(`You got ${discount}% discount`)
```

## Switch case statement

1. a simple switch case example in typescript

```javascript
let targetId = 'btnDelete';

switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete');
        break;
    case 'btnNew':
        console.log('New');
        break;
}
```

2. grouping case example in typescript

```javascript
// change the month and year
let month = 2,
    year = 2020;

let day = 0;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        day = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        day = 30;
        break;
    case 2:
        // leap year
        if (((year % 4 == 0) &&
            !(year % 100 == 0))
            || (year % 400 == 0))
            day = 29;
        else
            day = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${month} in ${year} has ${day} days`);
```
## For statement

```javascript
for(initialization; condition; expression) {
    // statement
}
```

1. simple for example -

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

2. optional block

```javascript
let i = 0;
for (; i < 10; i++) {
    console.log(i);
}
```

## while and do..while statement

```javascript
// while loop example
let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}
```

```javascript
// do..while loop example
let i = 0;

do {
    console.log(i);
    i++
} while (i < 10);

```

## break and continue statements

```javascript
// break example -
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

let discount = 0;
let product = products[1];

switch (product.name) {
    case 'phone':
        discount = 5;
        break;
    case 'tablet':
        discount = 10;
        break;
    case 'laptop':
        discount = 15;
        break;
}

console.log(`There is a ${discount}% on ${product.name}.`);
```

```javascript
// continue example -
let index = -1;

while (index < 9) {

    index = index + 1;

    if (index % 2)
        continue;

    console.log(index);
}
```

# Functions

## Functions

```javascript
// syntax of typescript function
function name(parameter: type, parameter:type,...): returnType {
   // do something
}

// example -
function add(a: number, b: number): number {
    return a + b;
}

// try this - it will not give datatype error
let sum = add(10, 20);

// try this - it will give string to int error
let sum = add('10', '20');

console.log(sum);
```

## Function types

A function type has 2 parts :
1. parameters
2. return type

``(parameter: type, parameter: type, ...) => type``

The following shows how to declare a variable which has a function type that accepts two numbers and returns a number:

``let add: (x: number, y: number) => number;``

```javascript

// 1st way we can use function is by defining variable with add
add = function(x: number, y: number) {
    return x+y;
}

// you can also declare a variable and assign a function to a variable like this:
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

```

- Inference function types -

```javascript

let add = function (x: number, y: number) : number {
    return x + y;
}

let result = add(10,20);

console.log(result);

```

## optional function parameters

```javascript
function multiply(a: number, b: number, c?: number) : number {
    if(typeof c !== 'undefined') {
        return a * b * c;
    }

    return a * b;
}
```

## Rest parameters

A rest parameter allows a function to accept zero or more arguements of the specified type. In typescript, the rest parameter follow these rules:

- A function has only one rest parameter
- The rest parameter appears last in the parameter list
- The type of the rest parameter is an array type

```javascript
function fn(...rest: type[]) {
    // ..
}

// example -
function getTotal(...numbers: number[]) : number {
    let total = 0;
    numbers.forEach((num) => total += num);

    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60
```

# Classes

JavaScript does not have a concept of class like other programming languages such as Java and C#. In ES5, you can use a constructor function and prototype inheritance to create a “class”.

```javascript
class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let p1 = new Person('171-02-2580','John','Doe')
console.log(p1.getFullName());
```