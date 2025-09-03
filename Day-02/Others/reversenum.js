/**
 * Reverse the number 
 * 1234 to 4321 or -1234 to -4321
 */

var reverseNumber = function (x) {
    let xCopy = x;
    let rev = 0;
    x = Math.abs(x);

    while(x > 0) {
        rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    return (xCopy < 0) ? -rev : rev;
}

console.log(reverseNumber(1234)); //-1234