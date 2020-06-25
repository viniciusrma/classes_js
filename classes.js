/*
Introduction to Classes

Take, for example, an object representing a dog named Lolla. 
This dog’s name (a key) is "Lolla" (a value) and has an age (another key) of 2 (another value). 
We create the Lolla object below:
*/

let lolla = {
  _name: 'lolla',
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
4. Accessing peppa.age returns 1 and accessing luke.age returns 0.
*/

/*
Inheritance

Imagine that now we also want to accept cats in our dog daycare.
We would need to create a Cat class so we can quickly generate Cat instances. 
We know that some properties in our Cat class (name, age) are similar to the properties in our Dog class, 
Though, there will be some differences, because of course, cats are not dogs.
*/

class Cat { //Here we create an instance called Cat 
  constructor(name, usesSandbox) {
    this._name = name; //This propertie is shared with Dog class 
    this._age = 0; //This propertie is also shared with Dog class
    this._usesSandbox = usesSandbox; //The Cat class also contains _usesSandbox property, that holds a boolean value to indicate if the cat can use their sandbox.
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }  
  get usesSandbox() {
    return this._usesSandbox;
  }
  incrementAge() { //This method is shared with Dog class
    this._age++;
  }
}

/*
When multiple classes share properties or methods, they become candidates for inheritance.
With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. 
The child classes inherit the properties and methods from their parent class.
Let’s abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.
Take a look at the example below:
*/

class Animal {
  constructor(name) {
    this._name = name;
    this._age = 0;
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
The Animal class contains the properties and methods that the Cat and Dog classes share (name, age, .incrementAge()).
Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Dog.
*/

class Cat extends Animal {
  constructor(name, usesSandbox) {
    super(name);
    this._usesSandbox = usesSandbox;
  }
}

/*
1. The 'extends' keyword makes the methods of the Animal class available inside the Cat class.
2. The constructor, called when you create a new Cat object, accepts two arguments, name and usesSandbox.
3. The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class.
4. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error.
5. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
6. _usesSandbox is a new property that is unique to the Cat class, so we set it in the Cat constructor.
*/

const garfield = new Cat('Garfield', false); 
console.log(garfield._name); // output: Garfield

/*
1. In the example above, we create a new instance of the Cat class, named garfield. 
2. We pass it 'Garfield' and false for our name and usesSandbox arguments. 
3. When we call console.log(garfield._name) our program prints, Garfield.
*/

garfield.incrementAge(); 
console.log(garfield.age); 

/*
1. In the example above, our garfield instance calls incrementAge() method, accessed from the parent class.
2. console.log(garfield.age); // Log value saved to age, in this case, 1.
*/

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

/*
This Dog class has access to the same properties, getters, setters, and methods as the Dog class we made without inheritance
...but with a quarter of the size.
*/

/*
Static Methods

Sometimes you will want a class to have methods that aren’t available in individual instances, but that you can call directly from the class.
Let’s see how to use the 'static' keyword to create a static method called generateName method in our Animal class:
*/

class Animal {
  constructor(name) {
    this._name = name;
    this._age = 0;
  }

  static generateName() {
    const names = ['Angel', 'Spike', 'Buddy', 'Fresh', 'Hash'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

/*
In the example above, we create a static method called .generateName() that returns a random name when it’s called.
Because of the 'static' keyword, we can only access .generateName() by appending it to the Animal class.
We call the .generateName() method with the following syntax:
*/

console.log(Animal.generateName()); // returns a random name

//You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

const billy = new Animal('Billy'); 
billy.generateName(); // TypeError

//The example above will result in an error, because you cannot call static methods - like .generateName() - on an instance (billy).