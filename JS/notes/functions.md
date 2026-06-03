What is a function?
- lets us reuse code

Rules for function syntax
1. Cant use special words
2. Cant start with a number
3. Cant use a special character

Best practice
- use camelCase




Return Statement
- Lets us get a value out of a function

Parameter
- Lets us put a value into a function


Default Parameters
- If you forget to pass a argument the default parameter you can define the default value of the paramter 
function calc(a, b=0)

Rest Parameters
- Allows a function to accept an indefinite number of arguments as a single array
- Only 1 rest parameter is allowed and it must be at the end
- All the values in the rest parameter goes into an array
function collectThings (x, ...y)



Arrow Functions
- You dont need function keyword
- Add =>
const add = (x, y) => {
  return x + y
}

-----
const add = (x, y) => x + y;



Nested Functions
- Function defined inside of another function
function outer() {
  console.log('outer);
  function inner() {
    console.log('inner);
  }
  inner();
}

outer();

- prints outer, Inner


Function Scope
- Variables declared inside a function are local to that function and cannot be accessed from outside in


Closure
- A function that "remembers" the environment in which it was created

function init() {
  var name = "Mozilla"; //name is a local var created by init
  function displayName() { //displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();



Callback Functions
- A function passed as an argument to another function, which is then executed (or "called back") inside that outer functiuon to complete some kind of routine or action

function greet(name, callback) {
  console.log('Hello ' + name);
  callback(); // Callback is executed here
}

function sayGoodbye() {
  console.log('Goodbye!');
}

//sayGoodbye is passed as the callback argument
greet('Alice', sayGoodbye);


High Order Functions
1. Accepts one or more functions as arguments('callbacks')
2. Returns a function as its result



Pure Function
- Function that alwasy produces the same output for the same input and has no observable side effects
function add(a,b) {
  return a + b;
}

IIFE(Immediately Invoked Function Expression)
- JS design pattern where a function is executed as soons as it is defined
(function () {
  console.log('I run immediately);
})();



Recursion
- Function calls itself