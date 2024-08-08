---
sidebar_position: 3
---

# Values

In computer programming, 'value' refers to a piece of data that can be stored and manipulated within a program. In JavaScript, values can be of various data types, such as strings, numbers, booleans, and objects.

We differentiate between the following 8 types of values in JavaScript:

- **String** - A sequence of characters
- **Number** - A number
- **BigInt** - A number that can be arbitrarily large
- **Boolean** - A boolean value
- **Null** - A special value that represents the absence of a value
- **Undefined** - A special value that represents the absence of a value
- **Object** - A collection of key-value pairs
- **Symbol** - A unique value

## Strings, Numbers and Booleans

```js
let name = "John Doe";
let age = 30;
let isStudent = false;

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean

```

## BigInt in JavaScript

A BigInt in JavaScript is a data type used to represent integers that are too large to be represented by JavaScript's standard number data type (which is a floating-point representation).

Here's an example of a BigInt in JavaScript:

```js

let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // Output: bigint

```
You would typically use a BigInt in JavaScript when you need to perform arithmetic operations with very large integers, such as cryptographic applications or working with extremely large numbers beyond the safe limit of JavaScript's normal number type.

For example, you could use a BigInt to represent a large, unique identifier for a database record.

## Null and Undefined

In JavaScript, ``null`` and ``undefined`` are both values that indicate the absence of a value or object, but they are slightly different.

``undefined`` is a value that is automatically assigned to variables that are declared but have not been assigned a value. For example:

```js
let myVariable;
console.log(myVariable); // Output: undefined

```
``null`` is a value that represents the intentional absence of any object value. It is a value that you can assign to a variable to indicate that the variable doesn't have a value. For example:

```js
let myVariable = null;
console.log(myVariable); // Output: null
```

A good example of when you would encounter undefined is when you try to access a property of an object that does not exist. For example:

```js
let myObject = {};
console.log(myObject.property); // Output: undefined

```

## Objects

In JavaScript, an ``Object`` is a collection of key-value pairs that can store multiple values and data types. An object can be created using the object literal notation ``{}``, or by using the ``Object`` constructor.

Here's an example of an object in JavaScript:

```js
let person = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA"
  },
  hobbies: ["reading", "hiking", "traveling"]
};
```

Objects are commonly used in JavaScript to model real-world objects or data structures. For example, you could use an object to store information about a person, such as their name, age, address, and hobbies. You can access and modify the values in the object using the dot notation (e.g. ``person.name``) or square bracket notation (e.g. ``person["name"]``).

Objects are also widely used in JavaScript to store data in collections and as the return value of functions, as well as to define objects with methods, i.e. functions as properties.

In addition to object literals, JavaScript has several other built-in objects, such as ``Array``, ``String``, ``Number``, ``Boolean``, etc., that offer additional functionality for working with the respective data types.

## Symbols

In JavaScript, a ``Symbol`` is a new data type that was introduced in ECMAScript 6 (ES6). A ``Symbol`` is a unique and immutable identifier that can be used as a property key for objects.

Here's an example of how you can create a Symbol:

```js
const sym = Symbol();


```
A ``Symbol`` is useful for defining object properties that should not be enumerated or that should not have properties that conflict with other properties. For example, consider the following code:

```js

const id = Symbol('id');
const person = {
  name: 'John Doe',
  [id]: 123
};

console.log(Object.getOwnPropertySymbols(person)); // Output: [Symbol(id)]
console.log(person[id]); // Output: 123

```

In this example, we created a``Symbol`` called ``id`` and used it as a property key for the ``person`` object. The ``Object.getOwnPropertySymbols`` method allows you to retrieve the Symbol properties of an object. Since Symbols are unique, they can be used to define object properties without fear of collision with other properties.

``Symbols`` are useful for defining private properties that should not be enumerated or accessed outside of the object. For example, you can use a ``Symbol`` to define a private method for an object, which can only be accessed within the object and cannot be overwritten or overridden by other code.
