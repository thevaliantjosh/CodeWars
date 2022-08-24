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

