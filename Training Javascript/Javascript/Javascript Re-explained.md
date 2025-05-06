# JavaScript Snippets, Commands, and Code  
A comprehensive list of JavaScript snippets, organized by complexity and usage for easy reference.  

## Table of Contents  
1. [Beginner Level](#beginner-level)  
    - [Value Types](#value-types)  
    - [Creating String Literals](#creating-string-literals)  
    - [Commenting Code](#commenting-code)  
    - [Concatenating Strings with +](#concatenating-strings-with-)  
    - [Creating Numeric, Boolean Literals](#creating-numeric-boolean-literals)  
    - [Naming Variables with Identifiers](#naming-variables-with-identifiers)  
    - [Creating Complex Data Structures](#creating-complex-data-structures)  
2. [Intermediate Level](#intermediate-level)  
    - [Type Conversion](#type-conversion)  
    - [String Members & Manipulation](#string-members--manipulation)  
    - [Replacing & Splitting Strings](#replacing--splitting-strings)  
    - [Searching with RegExp](#searching-with-regexp)  
3. [Advanced Level](#advanced-level)  
    - [Operators](#operators)  
    - [Controlling Flow](#controlling-flow)  
4. [Expert Level](#expert-level)  
    - [Member Inheritance](#member-inheritance)  

---

## Beginner Level  

### Value Types  
JavaScript's primitive data types include:  

- **String**: Text, e.g., `'hello'`.  
- **Number**: Numeric values, e.g., `100` or `3.14`.  
- **Boolean**: Logical `true`/`false`.  
- **null**: Explicitly no value.  
- **undefined**: A variable declared but not assigned.  
- **Symbol**: Unique identifier (ES6+).  

```javascript
let name = 'Alice'; // String literal
let age = 30;       // Number literal
let isStudent = true; // Boolean literal
let empty = null;    // Null value
let notAssigned;     // Undefined
```

### Creating String Literals  
Use quotes:  

```javascript
let greeting = 'Hello'; // single quotes
let farewell = "Goodbye"; // double quotes
```

### Commenting Code  

```javascript
// This is a single-line comment

/*
  Multi-line comment
  explains more details
*/
```

### Concatenating Strings with +  

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + ' ' + lastName; // "John Doe"
```

### Creating Numeric, Boolean Literals  

```javascript
let age = 25;   // Number
let isActive = false; // Boolean
```

### Naming Variables with Identifiers  
Rules:  

- Must start with `_`, `$`, or a letter.  
- Cannot begin with a digit.  
- Use meaningful names.  
- Case-sensitive.  

```javascript
let _count = 10; // valid
let $name = 'Jane'; // valid
let userAge = 22; // good practice
```

### Creating Complex Data Structures  

#### Object Literals  
Use to group related data.  

```javascript
let person = {
  firstName: 'Alice',
  lastName: 'Johnson',
  age: 28,
  greet: function() { return 'Hello!'; }
};
```

Valid Indentifiers  

```javascript
let book = {
  title: 'Javasccript Guide',
  author: 'Theophilus Samuel',
};
```

#### Array Literals  
Ordered collections:  

```javascript
let colors = ['red', 'green', 'blue'];
```

#### Function Literals (Function Expressions)  

```javascript
let add = function(x, y) {
  return x + y;
};
```

---

## Intermediate Level  

### Type Conversion  

#### String Members & Manipulation  

```javascript
let message = "Hello, world!";
console.log(message.length); // 13
console.log(message.toUpperCase()); // "HELLO, WORLD!"

// To log the type of a variable:
let data = 42;
console.log(typeof data); // "number"

let text = "Sample text";
console.log(typeof text); // "string"

let isActive = true;
console.log(typeof isActive); // "boolean"
```

#### Replacing & Splitting Strings  

```javascript
let newMsg = message.replace('world', 'JavaScript'); // "Hello, JavaScript!"
let words = message.split(', '); // ['Hello', 'world!']
```

#### Searching with RegExp  

```javascript
let pattern = /hello/i; // case-insensitive pattern
pattern.test('Hello there'); // true
```

---

## Advanced Level  

### Operators  

#### Operator Precedence & Associativity  

```javascript
let result = 2 + 3 * 4; // 14, multiplication before addition.
```

#### Logical Operators  

```javascript
if (isAdult && hasID) { ... }
let result = isAdult || isSenior; 
```

---

## Expert Level  

### Member Inheritance  

#### Object Creation with Constructor Functions  

```javascript
function Person(name) {
  this.name = name;
}
let p1 = new Person('Alice');
```

#### Classical Inheritance with ES6 Classes  

```javascript
class Animal {
  speak() { console.log('Animal speaks'); }
}
class Dog extends Animal {
  speak() { console.log('Woof!'); }
}
let d = new Dog();
d.speak(); // Woof!
```

#### Instance Checking  

```javascript
console.log(d instanceof Dog); // true
console.log(p1 instanceof Person); // true
```



## Functions and Arrays  

### Why Use Functions?  
Functions encapsulate reusable, modular chunks of code, making programs more organized and manageable.  

```javascript
function greet(name) {
    return 'Hello ' + name;
}
console.log(greet('Alice')); // "Hello Alice"
```

### Functions Are Values  
Functions in JavaScript are first-class citizens; they can be assigned to variables, passed as arguments, and returned like other values.  

```javascript
const square = function(x) { return x * x; };
console.log(square(5)); // 25

// Passing function as argument
function process(func, value) {
    return func(value);
}
console.log(process(square, 4)); // 16
```

### Function Members  
Functions have properties like `.length` (number of parameters) and `.name`.  

```javascript
function add(a, b) { return a + b; }
console.log(add.length);  // 2
console.log(add.name);    // "add"
```

### Conditional Advance Loading  
Load modules or code lazily to optimize performance:  

```javascript
if (condition) {
    import('./module.js').then(module => {
        module.doSomething();
    });
}
```

### Object.defineProperty() & Object.defineProperties()  
Create or modify object properties with specific attributes:  

```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
    value: 'Alice',
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(obj.name); // "Alice"
obj.name = 'Bob'; // ignored if writable: false

// Multiple properties:
Object.defineProperties(obj, {
    age: {
        value: 30,
        writable: true
    },
    country: {
        value: 'USA',
        enumerable: true
    }
});
```

### Object.create()  
Create objects with specified prototypes:  

```javascript
let personProto = {
    greet() { return 'Hello'; }
};
let person = Object.create(personProto);
console.log(person.greet()); // "Hello"
```

### Using the `new` Keyword with Functions  
Functions used as constructors:  

```javascript
function Person(name) {
    this.name = name;
}
let p1 = new Person('Alice');
console.log(p1.name); // "Alice"
```

### Lazy Loading with Dynamic Imports  
Efficiently load modules on-demand to optimize performance:  

```javascript
async function loadModule() {
    const module = await import('./module.js');
    module.doStuff();
}
```

### Recursion  
Functions calling themselves for problems like factorial:  

```javascript
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
```

### Borrowing Methods with `apply()` and `call()`  
Invoke functions with explicit `this` context:  

```javascript
let obj = { value: 42 };
function printValue() { console.log(this.value); }
printValue.call(obj); // 42
// or with apply()
printValue.apply(obj);
```

### Overriding `toString()`  
Customize object's string representation:  

```javascript
let obj = {
    name: 'Sample',
    toString() {
        return `Object: ${this.name}`;
    }
};
console.log(obj.toString()); // "Object: Sample"
```

### Testing for an Array  
Different methods:  

```javascript
Array.isArray([1,2,3]); // true
// or using instanceof
console.log([1,2,3] instanceof Array); // true
```

### Rewriting `cloneMembers()`  
Clone object properties:  

```javascript
function cloneMembers(obj) {
    return Object.assign({}, obj);
}
const original = { a: 1, b: 2 };
const clone = cloneMembers(original);
console.log(clone); // { a: 1, b: 2 }
```

### Currying  
Transform functions into chainable functions with preset parameters:  

```javascript
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
let double = multiply(2);
console.log(double(5)); // 10
```

### Method Chaining  
Design objects to enable method chaining:  

```javascript
const chainable = {
    value: 0,
    add(x) {
        this.value += x;
        return this;
    },
    subtract(x) {
        this.value -= x;
        return this;
    },
    result() {
        return this.value;
    }
};
console.log(chainable.add(5).subtract(2).result()); // 3
```

### Closure & Returning Functions  
Create private variables:  

```javascript
function makeCounter() {
    let count = 0; // private
    return {
        increment() { count++; },
        getCount() { return count; }
    };
}
const counter = makeCounter();
counter.increment();
console.log(counter.getCount()); // 1
```

### Passing a Configuration Object  
Flexible function parameters:  

```javascript
function initSettings({ theme = 'light', language = 'en' } = {}) {
    console.log(theme, language);
}
initSettings({ theme: 'dark' }); // dark en
initSettings(); // light en
```

### Callback Functions  
Functions passed as arguments:  

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Data received');
    }, 1000);
}
fetchData((message) => console.log(message));
```

### Memoization  
Cache results for performance:  

```javascript
function factorial(n, cache = {}) {
    if (n <= 1) return 1;
    if (cache[n]) return cache[n];
    cache[n] = n * factorial(n - 1, cache);
    return cache[n];
}
console.log(factorial(5)); // 120
```

### Summary & Tips  
- Use functions for code reuse, abstraction, and managing complexity.  
- Leverage closures for private data.  
- Apply method chaining for fluent interfaces.  
- Optimize with lazy loading and memoization.  