//alert("Welcome to freecodecamp practice!");

/*Data Types:
* undefined, null, boolean, string, symbol, number, and object
* undefined: something that hasnt been defined, maybe a variable with nothing declared yet
* Object can store key value pairs
* you can store data in a variable, its a lable that points to the data that you can fill with anything.
* */

let myName = "Joshua"

myName = "Joshua Sprouse"

let ourName = "Codeup"

const pi = 3.14

let a;//you can declare a variable without assigning it
console.log(a);
let b = 2; //assigning 2 to b
console.log(b)

a = 7; //you didnt have to declare a becuase it was already declared
console.log(a)
b = a //now you have assigned a to be so b will hold the value of what you just put in a

console.log(b);
console.log(a);

//initializing a variable with an initial value the same time its declared

let number = 10
let number2 = 5
let string1 = "I am a"

//what would you expect the output to be with the below code?

number = number + 1; //expect 11
console.log(number);
number2 = number2 + 5 // expect 10
console.log(number2);
string1 = string1 + " String!"; //expect "I am a String"
console.log(string1);


//Case sensitivity in variables

//Here are some declarations
//Make sure to Use cameCase, which is capitalizing the start on eache new word with the first workd being lower case.
let studlyCapVar;
let properCamelCase;
let titleCaseOver;

//Assignments

studlyCapVar = 10;
//console.log(studlyCapVar);
properCamelCase = "A String";
//console.log(properCamelCase);
titleCaseOver = 9000;
//console.log(titleCaseOver);

//Math

let sum = 10 + 10;
console.log(sum);

let differance = 20 - 8;
console.log(differance);

let product = 8 * 10;
console.log(product);

let quotient = 66 / 33;
console.log(quotient);

//increment

let thisIncrement = 2
thisIncrement++;
console.log(thisIncrement);

let decrement = 3;
decrement--;
console.log(decrement);

//Decimal Numbers
//Floating point numbeers or floats

let ourDecimal = 4.2;

let multiplyDecimal= .1 * ourDecimal;
console.log(multiplyDecimal);

//how to get a remainder
let remainder = 11 % 3;
console.log(remainder);

//using the += operator

let three = 3;
let seventeen = 17;
let twentyThree = 23;

three += 12;
console.log(three);
seventeen += 9;
console.log(seventeen);
twentyThree += 7;
console.log(twentyThree);

three -= 12;
console.log(three);
seventeen -= 9;
console.log(seventeen);
twentyThree -= 7;
console.log(twentyThree);

let coolGame = "Morrowind"
let coolGame2 = "Oblivion"

console.log(`${coolGame} and ${coolGame2} are cool games!`);

//Escaping literal quotes

let letsEscape = " I want to use \"double\" quotes for this string!"
console.log(letsEscape);

/*A better way to escape double quotes is to use template literals
* use backticks `` in front and back of the string
* you can put placeholder with a dollar sign and curly braces
* such as: ${expressions}. The strings and placeholders get passed to a function you supply.
*
*
*
* */


