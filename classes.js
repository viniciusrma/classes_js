/*
Introduction to Classes

Take, for example, an object representing a dog named Lolla. 
This dog’s name (a key) is "Lolla" (a value) and has an age (another key) of 2 (another value). 
We create the Lolla object below:
*/

let Lolla = {
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