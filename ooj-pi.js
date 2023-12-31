console.log('Object Oriented JavaScript and Prototypal Inheritence');

// INHERITENCE - an object gets access to the properties and methods of another object
// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getFullname: function() {
//     return this.firstname + ' ' + this.lastname
//   }
// }

// var john = {
//   firstname: 'John',
//   lastname: 'Doe'
// }

// // don't do this ever, only for demo purposes!
// john.__proto__ = person
// console.log(john.getFullname()); //John Doe
// console.log(john.firstname); //John

// var jane = {
//   firstname: 'Jane'
// }
// jane.__proto__ = person
// console.log(jane.lastname); //default

var a = {}
var b = function() {}
var c = []

console.log(a.__proto__); // base object => null :D
console.log(b.__proto__); // base function => base object
console.log(c.__proto__); // base array => base object