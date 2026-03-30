function sortArray(nums: number[]): number[] {
    // Flag to know if we need another pass through the array
    let repetir: boolean = true;

    // Store the array length to avoid recalculating it
    let tamanio: number = nums.length;

    // Temporary variable to swap values
    let temp: number = 0;

    // Keep looping until no swaps happen
    do {
        // Assume no swaps will be needed this pass
        repetir = false;

        // Go through the array comparing each number with the next
        for (let i = 0; i < tamanio + 1; i++) {
            // If the current number is bigger than the next, swap them
            if (nums[i] > nums[i + 1]) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]];

                // If we swapped, we need another pass
                repetir = true;
            }
        }
        tamanio--;
    }while (repetir);

    // Return the sorted array
    return nums;
}

// Sample numbers to sort
let numbers: number[] = [10, 9, 1, 1, 1, 2, 3, 1];

// Call the function and print the sorted array
console.log(sortArray(numbers));