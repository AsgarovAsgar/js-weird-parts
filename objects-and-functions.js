console.log('objects and functions');
// FIRST CLASS FUNCTIONS - everything you can do with other types, you can do with functions
// assign them to variables, pass them around, create them on the fly
// FUNCTIONS ARE OBJECTS! So we can app property to them
// functions have name and code (invocable code)
// EXPRESSION - a unit of code that results in a value

var c = {
  name: 'object c',
  log: function() {
    // here this points to the object
    var self = this
    self.name = 'updated c'
    console.log(self.name);
    var setName = function(newname) {
      // here this points to global object
      self.name = newname
    }
    setName('updated c again')
    console.log(self.name);
  }
}
c.log()


// ARGUMENTS - the parameters you pass to a function
// IIFE = Immediately Invoked Function Expression
const greet = function(name) {

  return 'hello ' + name

}('John')

console.log(greet);

// classic example of IIFE
(function (name){
  console.log('hi', name);
}('from IIFE'))

const gree = say => name => console.log(say, name)

gree('hi')('closure')