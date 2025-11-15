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