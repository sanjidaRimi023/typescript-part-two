# TypeScript Part two

This README covers 
- **classes**

---

## What is a Class?

A **class** is a blueprint for creating objects. It can have:

- **Properties** – data the object holds  
- **Methods** – functions to perform actions  
- **Constructor** – special method to initialize objects  
- **Access modifiers** – control property visibility  

---

## Constructor

A **constructor** is a special method that runs when you create a new object.  
It is mainly used to **initialize properties** of the class.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) { // constructor
    this.name = name; // `this` refers to current object
    this.age = age;
  }
}

const p1 = new Person("Alice", 25);
console.log(p1.name); // Alice
console.log(p1.age);  // 25


- constructor runs automatically when an object is created.
- this refers to the current instance of the class.

---

## Methods

### Methods are functions inside a class that can perform actions using class properties.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() { // method
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! ${this.name} is now ${this.age} years old.`);
  }
}

const p2 = new Person("Bob", 30);
p2.greet();         // Hello, my name is Bob and I am 30 years old.
p2.haveBirthday();  // Happy Birthday! Bob is now 31 years old.
-Methods can access and modify properties using this.
-You always use this.propertyName to refer to the current object’s properties.

---

---
## The this Keyword

#### In classes, this always points to the current instance of the class .It allows methods to access or modify the object’s properties.

```ts
class Counter {
  count: number = 0;

  increment() {
    this.count += 1; // modify current object's property
    console.log(this.count);
  }

  reset() {
    this.count = 0;
    console.log("Counter reset:", this.count);
  }
}

const counter = new Counter();
counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // Counter reset: 0
---