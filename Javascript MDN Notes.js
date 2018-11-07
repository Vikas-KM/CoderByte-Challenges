//FROM - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/

//          Grammar and types           


//JAVASCRIPT is case sensitive
var Vikas = 'Vikas';
var vikas = 'vikas';

console.log(`${Vikas} ${vikas}`);

//How to use undefined to our advantage in for loop for booleans


var arr = []; //arr is undefined
if (arr[1]) //since arr is undefined it returns false and fails to execute for loop
  console.log('If statement');
else
  console.log('Else statement');

var a; //undefined converts to NaN in numeric context
a = a + 32;
console.log(a); //outputs NaN

var n = null; //null converts to 0 in numeric context
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
(function () {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

/*
Function hoisting Section
For functions, only the function declaration gets hoisted to the top and not the function expression.
*/

/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}


/* Function expression */

//uncomment below line to see
try {
  baz(); // TypeError: baz is not a function
} catch (error) {
  console.log('Function expression can\'t be hoisted \n' + error);
}


var baz = function () {
  console.log('bar2');
};
//solution
baz();

//CONST works for primitive and NOT for array and Objects
const MY_OBJECT = {
  'key': 'value'
};
MY_OBJECT.key = 'otherValue';

const MY_ARRAY = ['HTML', 'CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];

const PI = 3.14;
try {
  PI = 4.56;
} catch (error) {
  console.log('CONST value can\'t be changed \n' + error);
}

console.log(PI); //logs TypeError: Assignment to constant variable.

//For + it converts numeric into string
console.log('37' - 7); // logs = 30
console.log('37' + 7); //logs = "377"
console.log(+'37' + 7); //logs = 44, see below for details

//An alternative method of retrieving a number from a string is with the + (unary plus) operator:
console.log('1.1' + '1.1'); //logs 1.11.1
console.log(+'1.1' + +'1.1'); //logs 2.2


var myList = ['home', , 'school', ];
console.log(myList.length); //logs 3
myList = [, 'home', , 'school'];
console.log(myList.length); //logs 4
myList = ['home', , 'school', , ];
console.log(myList.length); //logs 4


var car = {
  myCar: 'Saturn',
  getCar: 'Honda',
  special: 'Toyota' //NO comma',' for the last remember
};

console.log(car.myCar); //logs Saturn
console.log(car.getCar); //logs Honda
console.log(car.special); //logs Toyota

/*
Object property names can be any string, including the empty string. If the property name would not be a valid JavaScript identifier or number, it must be enclosed in quotes. Property names that are not valid identifiers also cannot be accessed as a dot (.) property, but can be accessed and set with the array-like notation("[]").
*/

var unusualPropertyNames = {
  '': 'An empty string',
  '!': 'Bang!'
}
//console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']); // An empty string
//console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !
console.log(unusualPropertyNames['!']); // Bang!


//          Control flow and error handling             

//even though same variable is declared twice it doesn output error
var x = 1; {
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
if (!undefined && !0 && !NaN && !false && !(''))
  console.log('Falsy Values');

/*
The finally block
The finally block contains statements to execute after the try and catch blocks execute but before the statements following the try...catch statement. The finally block executes whether or not an exception is thrown. If an exception is thrown, the statements in the finally block execute even if no catch block handles the exception.
*/
function f1() {
  try {
    console.log(0);
    throw 'bogus';
  } catch (e) {
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
  } catch (e) {
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
} catch (e) {
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

var arr = [1, 2, 3, 4, 5, 6];
for (value in arr) {
  console.log(arr[value]);
}

var obj = {
  name1: 'name1',
  name2: 'name2',
  name3: 'name3',
  name4: 'name4',
  name5: 'name5'
};

for (value in obj) {
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
try {
  console.log(square(5)); // TypeError: square is not a function
} catch (error) {
  console.log('Function expression was not hoisted');
}
var square = function (n) {
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
    return x * 2; //Here X is not taking 5 of Outside but 10 that is passed, and returns 20
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

var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);
console.log(a3); // logs [8, 6, 7, 9]


/*        Assignment operators        */

//Exponentiation assignment	      x **= y	x = x ** y
// Assuming the following variable
bar = 5
bar **= 2 // 25
console.log(bar);
bar **= 'foo' // NaN
console.log(bar);


//Left shift assignment	          x <<= y	x = x << y
var bar = 5; //  (00000000000000000000000000000101)
bar <<= 2; // 20 (00000000000000000000000000010100)
console.log(bar);
//Bitwise shifting any number x to the left by y bits yields x * 2 ** y.


//Right shift assignment	          x >>= y	x = x >> y
var bar = 5; //   (00000000000000000000000000000101)
bar >>= 2; // 1 (00000000000000000000000000000001)
console.log(bar);

var bar = -5; //    (-0000000000000000000000000000101)
bar >>= 2; // -2    (-00000000000000000000000000000010)
console.log('bar value' + bar);

/*
representing negative numbers in base 2
1: write the number as you write positive Number
number 5(8 bit) 00000101
2: invert the numbers = 5 becomes 11111010
3: now add 1 to it
11111010
+
00000001
11111011
4: Now right shift it 11111110   this is -128 + 64 + 32 + 16 + 8 + 4 + 2 = -2.
*/

//Unsigned right shift assignment	  x >>>= y	x = x >>> y

/*
For non - negative numbers, zero - fill right shift and sign - propagating right shift yield the same result.For example, 9 >>> 2 yields 2, the same as 9 >> 2:
*/

var bar = 9;  //(base 10): 00000000000000000000000000001001(base 2)
bar >>> 2  //(base 10): 00000000000000000000000000000010(base 2) = 2(base 10)

//However, this is not the
//case for negative numbers.
//For example, -9 >>> 2 yields 1073741821, which is different than - 9 >> 2(which yields - 3):

var bar = -9;   //(base 10): 11111111111111111111111111110111(base 2) 
bar >>> 2  //(base 10): 00111111111111111111111111111101(base 2) = 1073741821(base 10)


/*      Destructuring     */
/*
the destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects using a syntax that mirrors the construction of array and object literals.
The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
*/
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2


var foo = ['one Hundred', 'two Hundred', 'three Hundred'];

var [one, two, three] = foo;
console.log(one); // "one Hundred"
console.log(two); // "two Hundred"
console.log(three); // "three Hundred"


// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7


// Swapping variables Section
// Two variables values can be swapped in one destructuring expression.
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


// var [a, ...b,] = [1, 2, 3]; //SyntaxError: Rest element must be last element
// SyntaxError: rest element may not have a trailing comma

//Object destructuring
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true


var a, b;

({a, b} = {a: 1, b: 2});

// The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.

// {a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.

// However, ({a, b} = {a: 1, b: 2}) is valid, as is var {a, b} = {a: 1, b: 2}

// Your ( ... ) expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line.

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true

var {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5


var a5 = 'Cat' && 'Dog';    // t && t returns Dog
var a6 = false && 'Cat';    // f && t returns false
var a7 = 'Cat' && false;    // t && f returns false
var a8 = 'Dog' && 'Cat';    // t && t returns Cat
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);


var o5 = 'Cat' || 'Dog';    // t || t returns Cat
var o6 = false || 'Cat';    // f || t returns Cat
var o7 = 'Cat' || false;    // t || f returns Cat
var o8 = 'Dog' || 'Cat';    // t || t returns Dog
console.log(o5);
console.log(o6);
console.log(o7);
console.log(o8);


// Conditional (ternary) operator

// condition ? val1 : val2
// If condition is true, the operator has the value of val1. Otherwise it has the value of val2
// var age=21;
var age=16;
var status = (age >= 18) ? 'adult' : 'minor';
console.log(status); 
//outputs status as adult when ages is 21
//outputs status as minor when ages is 16

// delete

// The delete operator deletes an object, an object's property, or an element at a specified index in an array. The syntax is:

// delete objectName;
// delete objectName.property;
// delete objectName[index];
// delete property; // legal only within a with statement

// You can use the delete operator to delete variables declared implicitly but not those declared with the var statement.

// If the delete operator succeeds, it sets the property or element to undefined. The delete operator returns true if the operation is possible; it returns false if the operation is not possible.

x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)

/*
Deleting array elements
When you delete an array element, the array length is not affected. For example, if you delete a[3], a[4] is still a[4] and a[3] is undefined.

When the delete operator removes an array element, that element is no longer in the array.


When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete. However, trees[3] is still addressable and returns undefined.
*/

var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}


/*
If you want an array element to exist but have an undefined value, use the undefined keyword instead of the delete operator. In the following example, trees[3] is assigned the value undefined, but the array element still exists:
*/
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}


// typeof
// The typeof operator is used in either of the following ways:

// typeof operand
// typeof (operand)


var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

// The typeof operator returns the following results for these variables:

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
typeof true; // returns "boolean"
typeof null; // returns "object"


// in
// The in operator returns true if the specified property is in the specified object. The syntax is:

// propNameOrNumber in objectName
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true


// instanceof
// The instanceof operator returns true if the specified object is of the specified object type. The syntax is:

// objectName instanceof objectType

var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}

// Spread operator
// The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];

// Similarly, the spread operator works with function calls:

function f(x, y, z) { }
var args = [0, 1, 2];
f(...args);

//!   Numbers and dates

// The number type has three symbolic values: 
// +Infinity, 
// -Infinity, 
// and NaN (not-a-number).

//* Note that decimal literals can start with a zero (0) followed by another decimal digit, but if every digit after the leading 0 is smaller than 8, the number gets parsed as an octal number.

0888 // 888 parsed as decimal
0777 // parsed as octal in non-strict mode (511 in decimal)

// ! Binary numbers
// Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (0b or 0B). If the digits after the 0b are not 0 or 1, the following SyntaxError is thrown: "Missing binary digits after 0b".

var BIN_INT = 0b1010101010101;
var BIN_INT = 0B10110101010100;
// var ERROR_INT = 0b10192938733; //Throws syntax error



//! Hexadecimal numbers
// Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (0x or 0X). If the digits after 0x are outside the range (0123456789ABCDEF),  the following SyntaxError is thrown: "Identifier starts immediately after numeric literal".

0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900


//! Exponentiation
1E3   // 1000
2e6   // 2000000
0.1e2 // 10

//! Number object
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

console.log(biggestNum);  //1.7976931348623157e+308
console.log(smallestNum); //5e-324
console.log(infiniteNum); //Infinity
console.log(negInfiniteNum); //-Infinity
console.log(notANum); //NaN

//! Methods of Number
Number.parseFloat();
Number.parseInt();
Number.isFinite();
Number.isInteger();
Number.isNaN();
Number.isSafeInteger();

//* A safe integer is an integer that

// can be exactly represented as an IEEE-754 double precision number, and
// whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.
// For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, 253 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 253 + 1 can't be directly represented in IEEE-754 but instead rounds to 253 under round-to-nearest and round-to-zero rounding.  The safe integers consist of all integers from -(253 - 1) inclusive to 253 - 1 inclusive (± 9007199254740991 or ± 9,007,199,254,740,991).  

var dateYear = new Date();
var year = dateYear.getFullYear();
console.log(year);  // prints the current year