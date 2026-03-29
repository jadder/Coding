/*https://neetcode.io/problems/duplicate-integer/question?list=neetcode250 */
/* This function checks if there are any duplicate numbers in an array.
   It uses a Set to filter out duplicates, and compares the size with the original array. */
function hasDuplicate(nums: number[]): boolean {
    // If the number of elements in the array is not equal to the number of unique elements,
    // then we have at least one duplicate.
    return nums.length !== new Set(nums).size; 
}

// Example usage:

// No duplicates here, so the result should be false
const result: boolean = hasDuplicate([1, 2, 3, 4]);
console.log(result); // false

// This array has a duplicate (2), so the result should be true
const result2: boolean = hasDuplicate([1, 2, 2, 3]);
console.log(result2); // true