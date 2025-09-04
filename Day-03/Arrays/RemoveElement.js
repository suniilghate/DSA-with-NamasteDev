/**
 * Remove an element from an array
 * 
*/

let nums = [3, 2, 1, 5, 3, 4, 8, 3];
let val = 3;
var removeElement = function(a, val){
    let x = 0

    for(let i = 0; i < a.length; i++){
        if(a[i] != val){
            a[x] = a[i];
            x = x + 1;
        }
    }
    return x;
}

console.log(removeElement(nums, val));