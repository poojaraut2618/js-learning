// 1. Named function with no argument & no return value.
function show() {
    console.log("Hey.. Pooja");
}
show();

console.log("==============Square number============");

console.log("========== square() ============");
function square(){
    console.log("Finding the square of 10...");
    var result = 10 * 10;
    console.log("Square is:", result);
}
square();
square();

console.log("========== squareNumber() with argument ============");
// 2. Named function with argument and no return value
function squareNumber(num){
    console.log("Given number is:", num);
    var result = num * num;
    console.log("Square is:", result);
}
squareNumber(5);
squareNumber(25);


console.log("========== areaOfRectangle() with argument ============");

// WAF with name areaOfRectangle and it's two arguments namely as length and width  
function areaOfRectangle(length, width){// length=, width=
    console.log("Given Length and width is: ", length, width);
    var result =length * width;
    console.log("Area of rectangle is: ", result);
}
areaOfRectangle(30);

// 3. Named function with argument and return value
console.log("========== cubeOfNumber() with argument ============");

// Write a function to find a cube of given number

function cubeOfNumber(num){
    console.log("Given Number is ", num);
    var result = num*num*num;
    return result;
    console.log("===============");
}
var cube = cubeOfNumber(3);
console.log("Result is", cube );

// 2. Named function with  argument & no return value.
