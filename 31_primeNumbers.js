function isPrime(num){
    for(let index = 2; index < num; index++){
        if(num % index == 0 ){
            return false;
        }

    }
    return true;
}
var result = isPrime(7);
console.log(`Given Number 7 is Prime: ${result}`);

var resultOne = isPrime(9);
console.log(`Given Number 9 is Prime: ${resultOne}`);