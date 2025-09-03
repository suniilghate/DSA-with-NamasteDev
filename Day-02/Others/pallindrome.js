/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

var isPallindrome = function(n) {
    if(n < 0) return false;

    let rev = 0;
    let nCopy = n;
    while(n > 0) {
        rem = n % 10;
        rev = (rev * 10) + rem;
        n = Math.floor(n / 10);
    }

    return rev === nCopy;
}
//console.log(isPallindrome(151));
console.log(isPallindrome(151234));