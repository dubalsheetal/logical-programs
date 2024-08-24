let count = 0;
function checkPrime(array) {
    for (const element of array) {
        var result = isPrime(element);
        if (result == true) {
            console.log(`Prime no is : ${element}`);
            count++;
        }

    }
    console.log(`Total count of prime no is : ${count}`);

}

function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            return false;
        }
    }
    return true;
}
checkPrime([3, 9, 7, 6, 19, 29, 53]);


