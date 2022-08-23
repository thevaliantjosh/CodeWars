//alert("Welcome to Arrow Functions!");

//Normal function

function greeting(name) {
    return (`Hello, ${name} how are you today?`);
}
console.log(greeting("Joshua"));

//Greeting with arrow function

const greet = (name) => {
    return (`How are you today ${name} !`)
}

console.log(greet("Joshua"));

//Arrow Functions
//Shorthand for a function that returns a single expression.
const sayHello  = function (name) {
    return "Hello, " + name + " This is a shorthand Function!";
}
console.log(sayHello("Joshua"))
//Now with Arrow function the "name" argument can be without parenthesis if there is only one argument.
const arrowGreeting = name => "Hello, " + name + " You made an arrow Function!";
console.log(arrowGreeting("Joshua"));

//Arrow function with multiple statements
const listeningToPodcast = (podcast) => {
    const listeningTo = "I'm currently listening to " + podcast + "!";
    return listeningTo;
};
console.log(listeningToPodcast("Timesuck"));


//Default Function Parameter Values
//Old Way
// function helloWorldOrInput(input) {
//     if (typeof input === "undefined") {
//         input = "World";
//     }
//     return "Hello, " + input + "!";
// }
// console.log(helloWorldOrInput());
// console.log(helloWorldOrInput("World and all who inhabit it!"));

//es6 syntax (including template strings);

function helloWorldOrInput(input = "World") {
    return `Hello, ${input}!`;
}
console.log(helloWorldOrInput());
console.log(helloWorldOrInput("World and all who inhabit it!"));

//You can do the same thing with arrow functions
const recentGamePlayed = (game = "I haven't played any recent games!") => `Most recent game played: ${game}`;

console.log(recentGamePlayed());
console.log(recentGamePlayed("Grim Dawn"));


