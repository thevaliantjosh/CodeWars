//alert("Welcome to CodeWars Practice!");
//Remove all vowels with a function

function disemVowel(input) {
    let noVowels = input.split("");
    for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase();
        if (char == "a" || char == "e" || char == "i" || char == "o"|| char == "u") {
            noVowels[i] = ""
        }

    }
    return noVowels.join("");
}
console.log(disemVowel("Hello Darkness my old friend"));