console.log('Building Objects');

function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

var john = new Person('John', 'Doe')
var jane = new Person('Jane', 'Doe')
console.log(john);
console.log(jane);

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname 
  }
}

var jhonny = Object.create(person)
jhonny.firstname = "Jhonny"
console.log(jhonny.greet());

// POLYFILL - code that adds a feature which the engine may lack
// SYNTACTIC SUGAR - a different way to type something
//  that does not change how it works under the hood