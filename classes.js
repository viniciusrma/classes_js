/*
Introduction to Classes

Take, for example, an object representing a dog named Lolla. 
This dog’s name (a key) is "Lolla" (a value) and has an age (another key) of 2 (another value). 
We create the Lolla object below:
*/

let lolla = {
  _name: 'Halley',
  _age: 2,

  get name() {
    return this._name;
  },
    get age() {
    return this._age;
  },
    incrementAge() {
    this._age++;
  }
}

/*
Now, imagine you own a dog daycare and want to create a catalog of all the dogs who belong to the daycare. 
Instead of using the syntax above for every dog that joins the daycare, we can create a Dog class that serves as a template for creating new Dog objects. 
For each new dog, you can provide a value for their name.
Take a look at the example below:
*/

class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
}

/*
1. Dog is the name of our class. By convention, it is standard to capitalize and CamelCase class names.
2. JavaScript will invoke the constructor () method whenever a new instance of our Dog class is being created.
3. This constructor() method accepts one argument, name.
4. Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class.
5. Under this.name, we create a property called age, which will keep track of the age of every dog registered.
*/

/*
Instance

An instance is an object that contains the property names and methods of a class, but with unique property values.
Take a look at the example below:
*/

class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
}

const bilu = new Dog('Bilu'); // Create new Dog instance
console.log(bilu.name); // Log the name value saved to bilu: 'Bilu'

/*
1. We use the 'new' keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.
2. We create a new variable named bilu that will store an instance of our Dog class.
3. We pass the 'Bilu' string to the Dog constructor, which sets the name property to 'Bilu'.
4. Finally, we log the value saved to the name key in our bilu object, which logs 'Bilu' to the console.
*/

/*
Methods

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.
*/

class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  incrementAge() {
    this._age++;
  }
}

/*
1. In the example above, we add getter methods for name and age. 
2. Notice, we prepended our property names with underscores (_name and _age), which indicate these properties should not be accessed directly. 
3. Under the getters, we add a method named .incrementAge(). 
4. When you call .incrementAge() on a Dog instance, it adds 1 to the _age property. 
5. Between each of our methods, we did not include commas.
*/

/*
Method Calls

Methods are used to access and manipulate data from Dog instances.
*/

class Dog {
  constructor(name) {
    this.name = name;
    this.age = 0;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  incrementAge() {
    this._age++;
  }
}

let peppa = new Dog('Peppa'); 
peppa.incrementAge(); // Add 1 to peppa instance's age     <----- This is where the method is called into our program.

let luke = new Dog('Luke'); 

console.log(peppa.age); // Logs 1 to the console 

console.log(luke.age); // Logs 0 to the console

/*
1. In the example above, we created two new Dog instances, peppa and luke. 
2. We called incrementAge() on peppa, and it increases peppa's instance.
3. We did not not called incrementAge() on luke.
4. Accessing peppa.age returns 1 and accessing luke.behavior returns 0.
*/