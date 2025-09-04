/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * 
 *  Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]
 */

s = ["H","a","n","n","a","h"]; //["h","e","l","l","o"];

var reverseString = function(s){
    let n = s.length;

    for(let i = 0; i < n / 2; i++){
        let swapIndex = (n - 1) - i;
        let temp = 0;

        temp = s[i];
        s[i] = s[swapIndex];
        s[swapIndex] = temp;
    }

    return s;
}

console.log(reverseString(s));