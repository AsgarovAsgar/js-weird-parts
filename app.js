// when JS is executed Execution Context is created. 
// It is global, in this time  window and this are the same thing, 
// since this refers to global execution context


// b() //called b!
// console.log(a); // undefined, 
// but if we remove var a completely it will throw the error,
// PHASE 1. CREATION OF MEMORY SPACE
// because during creation of global execution context, 
// js creates space for the variables and functions,
// but in this time JS only know about the variable, not its value,
// so we get undefined, (undefined is just a placeholder for the value)
//  so HOISTING means setting up variables (set up to undefined) and functions
// undefined also means I NEVER SET VALUE TO THE VARIABLE
// PHASE 2: EXECUTION PHASE.
// after creation of global execution context, JS starts to read our code line by line from top to bottom


// var a = 'Hello world!'
// function b() {
//   console.log('called b!')
// } 

// at the global level, outer environment is null, because there is no outer level

// b() //called b!
// console.log(a); // Hello world!

// *********************************************
// SINGLE THREADED - ONE COMMAND AT A TIME
// SYNCHRONOUS - ONE AT A TIME

// *****************************
// FUNCTION EXECUTION
// function b() {

// }
// function a() {
//   b()
// }
// a()
// global ex. contect => a() ex.context => b() ex.context
// each function creates its own execution context
// each execution context has its own variable environment and they don't touch each other


// ******************************
// SCOPE CHAIN
// SCOPE - WHERE A VARIABLE IS AVAILABLE IN YOUR CODE
// each execution context has a reference to its outer environment
// when js cannot find var in the current execution context, 
// it search in the outer environment based on lexical environment,
// that means place that function exists matters

function b() {
  console.log(myVar);
}
function a() {
  var myVar = 2
  b()
}

var myVar = 1
a()
// in this example, we see 1, 
// because the function b and variable that equals to 1 are lives in the same execution context
// in other words, outer 'lexical' environment of the function b is global execution context

