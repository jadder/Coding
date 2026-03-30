function twoSum(nums: number[], target: number): number[] {
    // Variables to store the indices of the two numbers that sum to target
    let x: number = 0, y: number = 0;

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        // Check if the complement (target - nums[i]) exists in the array
        let t: number = nums.indexOf(target - nums[i]);

        // Make sure we found a number and it's not the same index as i
        if (t !== -1 && t !== i) {
            x = i;
            y = t;
            break; // Stop once we find the first valid pair
        }
    }

    // Make sure the smaller index comes first
    if (x > y) [x, y] = [y, x];

    // Return the indices of the two numbers that sum to target
    return [x, y];
}

// Test the function
console.log(twoSum([3, 4, 5, 6], 7)); // Output: [0, 1] because 3 + 4 = 7