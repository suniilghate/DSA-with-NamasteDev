/**
 * 88. Merge Sorted Array
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 */

let num1 = [2, 5, 6, 0, 0, 0]; //[1,2,3,0,0,0];
let m = 3;
let n = 3;
let num2 = [1, 2, 3]; //[2,5,6];

let mergeSort = function(num1, m, num2, n){
    let p1 = m - 1;
    let p2 = n - 1;

    for(let i = m + n - 1; i >= 0; i--){
        if(p2 < 0) break;

        if(p1 >= 0 && num1[p1] > num2[p2]) {
            num1[i] = num1[p1];
            p1--;
        } else {
            num1[i] = num2[p2];
            p2--;
        }
    }
    return num1;
}
console.log(mergeSort(num1, m, num2, n));