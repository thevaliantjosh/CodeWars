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
