/*
    Find the second largest number from an array
    arr = [4, 9, 0, 2, 8, 7, 1]
*/

function secondLargest(arr){
    let firstLargestNum = -Infinity;
    let secondLargestNum = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargestNum) {
            secondLargestNum = firstLargestNum;
            firstLargestNum = arr[i];
        } else if(arr[i] > secondLargestNum) {
            secondLargestNum = arr[i];
        }
    }

    return secondLargestNum;
}

let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondLargest(arr)

console.log(result);