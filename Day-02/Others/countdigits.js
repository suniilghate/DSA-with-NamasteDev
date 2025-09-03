/**
 *  Write a function that returns the count of digits in a number
 */

let num = 259;

function countDigits(n){
    let count = 0;
    while(n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

let result = countDigits(num);
console.log(result);