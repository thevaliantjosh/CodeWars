"use strict";
//alert("Welcome to General Practice!");

const ready = {
    name: "John",
    age: 30,
    skill: "Hunting"

}
const set = {
    name: "Jacob",
    age: 32,
    skill: "Fishing"
}
const go = {
    name: "Schmidt",
    age: 33,
    skill: "Cooking"
}
//Computed Property Names, add the variables of the object to an object in the console.log
// Dont do this: console.log(ready); you wont know the name of the object!
//Do this:
console.log({ready, set, go});
//Or make it a table!
console.table([ready, set, go]);

//Destructuring

const turtle = {
    name: "Snappy 🐢",
    legs: 4,
    occupation: "ninja",
    shell: "half",
    type: "Radical",
    meal: 10,
    diet: "Pizza 🍕"
}

// function feedTurtle({name, meal, diet}) {
//     return `Feed Turtle ${name} ${meal} slices of ${diet}`;
// }
// console.log(feedTurtle(turtle))

//Or

function feedTurtle(animal) {
    const { name, meal, diet} = animal
    return `Feed ${name} ${meal} slices of ${diet}`;
}
console.log(feedTurtle(turtle));

//Template Literals

const horse = {
    name: "Sir Codes-A-Lot",
    size: "Large",
    skills: ["All", "Of", "The", "Skills"],
    age: 4
}

const { name, size, skills } = horse;

let bio = `${name} is a ${size} horse skilled in ${skills.join(' ')}!`;
console.log(bio);

// function horseAge(str, age) {
//     const ageStr = age > 5 ? "old" : "young";
//     return `${str[0]}${ageStr} at ${age} years`;
// }
//
// const bio2 = horseAge`This horse is ${horse.age}`;
// console.log(horseAge(bio2));

//Return the Remainder from Two Numbers
function remainder(x, y) {
    return x % y;
}

//Write a function that will know whether the input is an array or not

let myArray = ["I", "E", "A", "I", "A", "I", "O"]

function isArray(array) {
    if(typeof array === "object") {
        return "That is an array Buddy!"
    } else {
        return "That's not an array Guy!"
    }
}
console.log(isArray(myArray))
console.log(isArray(28));


//Practice With functions
//Basic Functions and variable declarations
//Can we put a list of radius in an array, and have this function print out all the circumference?

let arrayOfRadii = [2, 4, 6, 8, 10, 12]

//     function processRadii(array) {
//         function calculateCircumference(radius) {
//             for(let i = 0; i < array.length; i++){
//
//                 let radius = array[i];
//
//         }
//         const pi = 3.14149;
//         return 2 * pi * radius;
//     }
//
// }
// console.log(calculateCircumference(arrayOfRadii));

function calculateCircumference(radius) {
    const pi = 3.14159;
    let circumference = 2 * pi * radius;
    return circumference.toFixed(2);
}

console.log(calculateCircumference(13));

function milesToKilometers(miles) {
    return miles * 1.609;
}



let changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);
console.log(changed);

//Function will take in an array, and an item as its parameters
/*arr.push(item) is a statement that when passed an argument of "item"
will push that item to the end of the array.
return arr.shift(); will take the array, and remove the first index of that array*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

//The below console.log will take the array and return it as a string.
console.log("Before: " + JSON.stringify(testArr));
/*The next console.log will call the function nextInLine, and pass in the arguments of the testArr, and the "item", thus invoking the function to push 6 to the end, and then return what index of the array that has been shifted out.  */
console.log(nextInLine(testArr, 6));
/*Now we will see what the array look like after invoking the function again, returning a string to see it more clearly*/
console.log("After: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, "buddy"));
console.log(nextInLine(testArr, [7, 8, 9]));
console.log(nextInLine(testArr, "guy"));
console.log("Now: " + JSON.stringify(testArr));
console.log(testArr);

//Working with Booleans;
/*&& will return false if one value is false, unless both values are true
* || (or) will return true if one value is true, unless both is false
* ! (not) applied to a single Boolean value and inverts this value. !true is false and !false is true*/

let x1 = true && false;
console.log(`x1 is: ${x1}\nThis is because one value is false`);
let x2 = !x1;
console.log(`x2 is: ${x2}\nThis is because the opposite of false is True!`);
let x3 = x1 || x2
console.log(`x3 is: ${x3}\nThis is because the Or Operator will return True if\none value is true, that being x2!`);

//Boolean Exercise
/*Write a function named nand that takes in two Boolean values. If both values are
* true, the result should be false. In the other case the return should be true*/

function nand(input1, input2) {
    if(typeof input1 !== "boolean" || typeof input2 !== "boolean") {
        return console.log("Please enter either, True or False, for the inputs!");
    } else {
        return !(input1 && input2|| !input1 < input2);
    }
}

console.log(nand(true, true));//expecting false
console.log(nand(true, false));//expecting true
console.log(nand(false, true));//expecting true
console.log(nand(false, false));//expecting true



// function welcomeToBooleans() {
//     return false;
// }
// console.log(welcomeToBooleans());

function temperatureConversion(temperature, isFahrenheit) {
    if(isFahrenheit === true) {
        return `${(temperature - 32) * 5 / 9}\xB0C`;
    }   else {
        return `${(temperature * 9 / 5) + 32}\xB0F`;
    }
}

console.log(temperatureConversion(32, true));
console.log(temperatureConversion(32, false));