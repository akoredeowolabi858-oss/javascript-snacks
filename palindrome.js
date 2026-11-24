const prompt = require("prompt-sync")();

let word = prompt("enter word : ");
let letter = "";

for(text of word){
    letter = text + letter;
 }   
if (letter == word){

console.log(letter + " is a palindrome");
}
else if(letter != word){
console.log(letter + "this is not a palindrome");
}

