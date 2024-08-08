---
sidebar_position: 5
---

# Variables

What is a Variable?

A place in memory of a computer where we can store a value. But what does this mean, you say? Well, let's take a look at an example.

Think of a variable, as a box that you can store things in. The classic example is a box of chocolates. You can store chocolates in the box, and you can take them out of the box. You can also put other things in the box, like a book, or a toy. You can even put other boxes in the box. The box is a variable, and the chocolates, the book, the toy, and the other boxes are values.

There are three ways to indicate the type of box, or type of variable we store a value in. The first is the `let` keyword. This is the most common way to declare a variable. The second is the `const` keyword. This is used to declare a variable that cannot be changed. The third is the `var` keyword. This is the oldest way to declare a variable, and is not used as often as the other two.

Let's take a look at an example.

```js
let myName = "John";
let age;
age = 30;

let friends = ["John", "Jane", "Mark"];

console.log(myName); // John
console.log(age); // 30
console.log(friends); // ["John", "Jane", "Mark"]
console.log(friends[0]); // John
console.log(friends.length ); // Jane

```

```

console.log(myName); // John

```

## The `Let` Keyword

The Let Keyword is used to declare a variable. It is the most common way to declare a variable. It is used to store a value that can be changed.

```js
let age = 42; // Declares a variable called age, and sets it to 42

function birthday() {
  age = age + 1; // Adds 1 to the age variable
}
```
## The `Const` Keyword

The Const Keyword is used to declare a variable. It is used to store a value that cannot be changed.

```js

const name = "Uriel"; // Declares a variable called name, and sets it to "John"

function changeName() {
  name = "Ariel"; // This will throw an error, because the name variable cannot be changed
}
```
## The `Var` Keyword

The Var Keyword is used to declare a variable. It is the oldest way to declare a variable, and is not used as often as the other two. It is used to store a value that can be changed.

```js
var age = 42; // Declares a variable called age, and sets it to 42

function birthday() {
  age = age + 1; // Adds 1 to the age variable
}
```
