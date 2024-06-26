let arrayRollNumber = [10, 20, 30, 40, 15, 20, 10];
console.log(arrayRollNumber);
console.log(`Length of the array, It means total number of elements in the array`);
console.log(arrayRollNumber.length);

console.log(`=============Accessing array values using index==================`);
const  element0th = arrayRollNumber[0];
console.log(element0th);
console.log(arrayRollNumber[2]);
var len = arrayRollNumber.length;
console.log(arrayRollNumber[len-1]);

console.log(`=============Update array values using index==================`);
arrayRollNumber[3] = 100;
console.log(arrayRollNumber);

console.log(`=============Add elements at the end of array==================`);
let array = [10, 20, 30, 40, 15];
console.log(`Original array: ${array}`);
array.push(200);
console.log(`After using push methos: ${array}`);

console.log(`=============Add elements at the beginning of array==================`);
array.unshift(500);
console.log(`AFter unshift: ${array}`);

console.log(`=============Remove elements from the beginning of array==================`);
array.shift();
console.log(`After shift: ${array}`);

console.log(`=============Remove elements from the end of array==================`);
array.pop();
console.log(`After using pop: ${array}`);

let array1 = [10, 20, 30, 40, 15];
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(element); 
}

console.log("raverse array in reverse order");
for (let index = array1.length-1; index >=0; index--) {
    const element = array1[index];
    console.log(element); 
}

console.log("Sum the array elements");
let sum = 0;
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    sum = sum + element;
}
console.log(sum);

console.log("Log the even numbers......");
let arrayNum = [11, 20, 32, 40, 15, 23, 80];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (element%2==0) {
        console.log(element);
    }
}

console.log("Log the Odd numbers......");
let arrayNumber = [11, 20, 32, 40, 15, 23, 80];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2!=0) {
        console.log(element);
    }
}