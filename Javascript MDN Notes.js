//FROM - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/

//          Grammar and types           


//JAVASCRIPT is case sensitive
var Vikas = 'Vikas';
var vikas = 'vikas';

console.log(`${Vikas} ${vikas}`);

//How to use undefined to our advantage in for loop for booleans


var arr=[]; //arr is undefined
if(arr[1])  //since arr is undefined it returns false and fails to execute for loop
    console.log('If statement');
else
    console.log('Else statement');

var a;  //undefined converts to NaN in numeric context
a = a + 32;
console.log(a); //outputs NaN

var n = null;  //null converts to 0 in numeric context
n = n * 32;
console.log(n); //outputs 0

/*
Variable hoisting -
Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception. This concept is known as hoisting; variables in JavaScript are in a sense "hoisted" or lifted to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.
*/

/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
//This IIFE
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

/*
Function hoistingSection
For functions, only the function declaration gets hoisted to the top and not the function expression.
*/
/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

//uncomment below line to see
try{ 
    baz(); // TypeError: baz is not a function
}catch(error){
    console.log('Function expression can\'t be hoisted \n' + error);
}


var baz = function() {
  console.log('bar2');
};
//solution
baz();

//CONST works for primitive and NOT for array and Objects
const MY_OBJECT = {'key': 'value'};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];

const PI = 3.14;
try{
    PI = 4.56;
}catch(error){
    console.log('CONST value can\'t be changed \n' + error);
}

console.log(PI);  //logs TypeError: Assignment to constant variable.

//For + it converts numeric into string
console.log('37' - 7); // logs = 30
console.log('37' + 7); //logs = "377"

//An alternative method of retrieving a number from a string is with the + (unary plus) operator:
console.log('1.1' + '1.1'); //logs 1.11.1
console.log(+'1.1' + +'1.1'); //logs 2.2

var myList = ['home', , 'school', ];
console.log(myList.length); //logs 3
myList = [ ,'home', , 'school'];
console.log(myList.length); //logs 4
myList = ['home', , 'school', , ];
console.log(myList.length); //logs 4


var car = { 
    myCar: 'Saturn', 
    getCar: 'Honda', 
    special: 'Toyota'   //missing ; for the last
};

console.log(car.myCar);  //logs Saturn
console.log(car.getCar);  //logs Honda
console.log(car.special);  //logs Toyota

/*
Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript identifier or number, it must be enclosed in quotes. Property names that are not valid identifiers also cannot be accessed as a dot (.) property, but can be accessed and set with the array-like notation("[]").
*/

var unusualPropertyNames = {
    '': 'An empty string',
    '!': 'Bang!'
}
//console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
//console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!


//          Control flow and error handling             

//even though same variable is declared twice it doesn output error
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2

/*
Falsy values

The following values evaluate to false (also known as Falsy values):

false
undefined
null
0
NaN
the empty string ("")
*/
if(!undefined && !0 && !NaN && !false && !(''))
    console.log('Falsy Values');

/*
The finally block
The finally block contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.
*/
function f1() {
    try {
        console.log(0);
        throw 'bogus';
    } catch(e) {
        console.log(1);
        return true; // this return statement is suspended
                   // until finally block has completed
        console.log(2); // not reachable
    } finally {
        console.log(3);
        return false; // overwrites the previous "return"
        console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5); // not reachable
}
f1(); // console 0, 1, 3; returns false


function f() {
    try {
        throw 'bogus';
    } catch(e) {
        console.log('caught inner "bogus"');
        throw e; // this throw statement is suspended until 
               // finally block has completed
    } finally {
        return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
}
  
try {
    f();
} catch(e) {
    // this is never reached because the throw inside
    // the catch is overwritten
    // by the return in finally
    console.log('caught outer "bogus"');
}
  
  // OUTPUT
  // caught inner "bogus"

/*
A Promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: successful operation
rejected: failed operation.
settled: the Promise is either fulfilled or rejected, but not pending.
*/



//           Loops and iteration            

labelCancelLoops: 
    while (true) {
        console.log('Entered First While');
        while (true) {
            console.log('Entered Nested While');
            break labelCancelLoops;
        }
    }
console.log('Exited both loops');
//breaks the upper while loop labelled as LabelCancelLoops

var arr = [1,2,3,4,5,6];
for(value in arr){
    console.log(arr[value]);
}

var obj = {
    name1: 'name1',
    name2: 'name2',
    name3: 'name3',
    name4: 'name4',
    name5: 'name5'
};

for(value in obj){
    console.log(obj.value); //Outputs undefined
    console.log(obj[value]); //Outputs name1, name2...
}


//      FOR-IN statement vs FOR-OF statement        

/*
The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
*/

var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
    console.log(i); // logs "0", "1", "2", "foo"
}

for (var i of arr) {
    console.log(i); // logs 3, 5, 7
}



//              Functions              

//function hoisting only works with function declaration and not with function expression.
console.log(square); // square is hoisted with an initial value undefined.
try{
    console.log(square(5)); // TypeError: square is not a function
}catch(error){
    console.log('Function expression was not hoisted');
}
var square = function(n) { 
  return n * n; 
}

/*
Closure
Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.
*/

function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); 
  // Think of it like: give me a function that adds 3 to whatever you give it

result = fn_inside(5); // returns 8
console.log(`result is ${result}`);
result1 = outside(3)(5); // returns 8
//outside(3)(5) = inside(5)  where x = 3 by outside , closure remember
console.log(`result1 is ${result1}`);

/*
Functions can be multiply-nested, i.e. a function (A) containing a function (B) containing a function (C). Both functions B and C form closures here, so B can access A and C can access B. In addition, since C can access B which can access A, C can also access A. Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. 

This is called SCOPE CHAINING`.
*/
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
    C(3);
    }
B(2);
}
A(1); // logs 6 (1 + 2 + 3)


/*
Name-Conflicts

inner-most scope takes the highest precedence, while the outer-most scope takes the lowest. This is the scope chain. The first on the chain is the inner-most scope, and the last is the outer-most scope.
*/

function outside() {
    var x = 5;
    function inside(x) {
      return x * 2;     //Here X is not taking 5 of Outside but 10 that is passed, and returns 20
    }
    return inside;
}
console.log('name conflict example ' + outside()(10)); // returns 20 instead of 10

//using the arguments

function myConcat(separator) {
    var result = ''; // initialize list
    var i;
    // iterate through arguments
    //see where the i starts
    for (i = 1; i < arguments.length; i++) {
       result += arguments[i] + separator;
       console.log(arguments[i]);
    }
    console.log(result);
    return result;
}
myConcat(', ', 'red', 'orange', 'blue'); //Outputs red, orange, blue,


/*
Default parameters
In JavaScript, parameters of functions default to undefined. However, in some situations it might be useful to set a different default value.
*/

function multiply(a, b = 1) {
    return a * b;
}
multiply(5); // 5


/*
Rest parameters
The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
*/

function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
}
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]


/*
ARROW functions
An arrow function expression (previously, and now incorrectly known as fat arrow function) has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous.
*/

var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });
console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]





