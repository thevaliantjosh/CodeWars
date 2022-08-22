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


/*
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
* */

let multiLineString = "First Line\n\t\\SecondLine\nThirdLine"
console.log(multiLineString);

//you can concatenate string using += operator

let plusEqualsString = "Using plus Equals";
plusEqualsString += " On Strings";

console.log(plusEqualsString);

//concatenation on strings

let codingAtMidnight = "I\n" + myName + ", am coding after midnight!"
console.log(codingAtMidnight);

//Appending variables to strings

let game = "Morrowind"
let describeGame= " is really fun!"
game += describeGame;
console.log(game);


//Length of a String
let charInGame = game.length
console.log(game.length);

//Bracket Notation to Find First Character in String

let firstLetterInName= myName[0]
console.log(firstLetterInName);
let firstLetterInLastName = myName.charAt(7);
console.log(firstLetterInLastName);
let myInitials = firstLetterInName + firstLetterInLastName;
console.log(myInitials);

//String Immutability

let worldGreeting = "Jello World";
console.log(worldGreeting);
//we cannot change strings once made, we need to declare again what we want the variable of worldGreeting to be to change it.

console.log(worldGreeting.replace(worldGreeting[0], "H"));
//we can replace the "H" here but the variable worldGreeting still has the original mistake
console.log(worldGreeting);
//to fix it we need to redeclare the variable!
worldGreeting = "Hello World!";
console.log(worldGreeting);
//no more Jello! :)

//Bracket Notation to find the Nth Character in String as Well as the Last!
let findingNumbersInStrings = "L3t5 F1nd @ll Th3 Numb3r5!"
let findThree = findingNumbersInStrings[1];
let findFive = findingNumbersInStrings[3];
let findOne = findingNumbersInStrings[6];
let findAtSymbol = findingNumbersInStrings[10];
let findThreeAgain = findingNumbersInStrings[16];
let findThirdThree = findingNumbersInStrings[22];
let findFiveAgain = findingNumbersInStrings[findingNumbersInStrings.length -2];
let findExclamation = findingNumbersInStrings[findingNumbersInStrings.length-1];
let gimmeThoseNumbers = findThree + findFive + findOne + findAtSymbol + findThreeAgain + findThirdThree + findFiveAgain + findExclamation;
console.log(gimmeThoseNumbers);

//Word Blanks

function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    let result = "";
    result += `The ${myAdjective} ${myNoun} was ${myVerb} in the woods ${myAdverb}.`;

    return result;
}

console.log(worldBlanks("Harry Potter", "Amazing", "Flying", "Swiftly"));
console.log(worldBlanks("Bigfoot", "Notorious", "Walking", "Sneakily"));

//Store Multiple Values with Arrays

let thingsILike = ["Harry Potter", "Bigfoot", "Halo", "Role Playing Games"];
console.log(thingsILike);
thingsILike.push("Guitar");
console.log(thingsILike);
thingsILike.unshift("The Paranormal");
console.log(thingsILike);
thingsILike.shift();
console.log(thingsILike);
thingsILike.unshift("The Witcher");
thingsILike[1] = 42;
thingsILike.push(42);
console.log(thingsILike);
thingsILike.pop();
thingsILike[thingsILike.length -1] = "Harry Potter";
console.log(thingsILike);

//Shopping List

let myShoppingList = [["Milk", 1], ["Eggs", 12], ["Butter", 1], ["Bacon", 1], ["Bread", 1], ["Cheese", 2]];
console.log(myShoppingList);
console.log(myShoppingList[0][0]);
myShoppingList.unshift(["Cereal", 3]);
console.log(myShoppingList);
console.table(myShoppingList);

//Reusable with Functions

function reusableFunction() {
    console.log("Coding is the best!");
}
reusableFunction();

//Passing value to functions with arguments
//Inside the Parens our the parameters that can be use
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
//
ourFunctionWithArgs(10, 5);