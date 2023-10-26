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

function buildFunctions() {
  var arr = []
  for(var i=0; i<3; i++) {
    arr.push(function() {
      console.log(i);
    })
  }
  return arr
}

var fs = buildFunctions() // now fs is the array of the functions

fs[0]() //3
fs[1]() //3
fs[2]() //3

function buildFunctions2() {
  var arr = []
  for(var i=0; i<3; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      }(i))
    )
  }
  return arr
}

var fs2 = buildFunctions2()
fs2[0]() //0
fs2[1]() //1
fs2[2]() //2


// makeGreeting is factory function
function makeGreeting(language) {
  return function(firstname, lastname) {
    if(language === 'en') {
      console.log('Hello', firstname, lastname);
    }
    if(language === 'es') {
      console.log("Hola", firstname, lastname);
    }
  }
}

var greetEnglish = makeGreeting('en')
var greetSpanish = makeGreeting('es')

greetEnglish('John', 'Doe')
greetSpanish('John', 'Doe')

// CALLBACK FUNCTION - A function you give to another function, 
// to be run when the other function is finished

function tellMeWhenDone(callback) {
  var a = 'work work'
  callback()
}
tellMeWhenDone(function() {
  console.log('work done...');
})