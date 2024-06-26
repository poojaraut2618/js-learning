var greet = "Good Morning";
console.log(`Find total numbers of characters from given string: ${greet}`);
var totalChar = greet.length;
console.log(`Total character is: ${totalChar}`);

//Methods
var char = greet.charAt(3);
console.log(`Character at index 3 is ${char} & is type ${typeof char}`);

var index = greet.indexOf("M");
console.log(`Index of char "M" is ${index}`);

var firstName = "POOJA";
var lastName = " RAUT";
var result = firstName.concat(lastName);
console.log(`Concatenated String: ${result} `);

var capital = lastName.toLowerCase();
console.log(`Last name in upper case ${capital}`);

console.log("========= toUppercase() ==============");
var lastName = "Sharma";

console.log("========== replace() =============");
var greet = "Good Morning";
var result = greet.replace("Good", "Afternoon");
console.log(`After replace : ${result}`);

console.log("========== trim() ==============");
var city = "  Pune   ";
console.log(`Length before trim is: ${city.length}`);
city = city.trim();
console.log(`Length after trim is: ${city.length}`);

console.log("========== includes() ==============");
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is "nin" includes: ${result}`);

var result = greet.includes("z");
console.log(`Is "z" includes: ${result}`);

console.log("========== split() ==============");
var myName = "Gajanan Kharat";
var result = myName.split(" ");
console.log(` Total number of words: ${result.length}`);

var word = "My Life My Rule";
var result = word.split("u");
console.log(`Total number of words: ${result}`);