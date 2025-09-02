//Find the largest number from an array 
// arr = [5, 0, 7, 10, 8, 17, 1]

function largestNumber(arr) {
    let largest = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

let arr = [5, 0, 7, 10, 8, 17, 11, 1];

let result = largestNumber(arr);
console.log(result);