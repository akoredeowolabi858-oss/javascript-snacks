const prompt = require("prompt-sync")();

let sum= 0;
let counter= 0;
while(true){
let number = Number(prompt("enter a number (enter -1 to end : "));
if(number == -1){

console.log("operation terminated");
    break;
}

else{
counter+=1;
sum = number;
average = sum/counter;

console.log("the average is : " + average);
}



}


