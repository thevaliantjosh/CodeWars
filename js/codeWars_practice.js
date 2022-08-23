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

/*Convert a String to a new String where each Character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization whn determining if a character is a duplicate.
* Examples
* "din" => "((("
* "recede" => "()()()"
* "Success" => )())())"
* "(( @" => "))(("
* */

function duplicateEncode(word) {
    //....
}