// Time Complexity: O(1)
// Space Complexity: O(1)
function longestConsecutive(numbers: number[]): number {
    // Edge case: empty array → no sequence
    if (numbers.length === 0) return 0;

    // Edge case: single element → sequence length is 1
    if (numbers.length === 1) return 1;

    // Sort the array in ascending order
    numbers.sort((a, b) => a - b);

    // Edge case: only two elements
    if (numbers.length === 2) {
        // If they are consecutive, return 2
        if (numbers[0] + 1 === numbers[1]) return 2;

        // Otherwise, the longest sequence is 1
        return 1;
    }

    // This will store the longest sequence found
    let maxLength: number = 0;

    // Iterate through the sorted array
    // currentLength tracks the current consecutive sequence length
    for (let i: number = 1, currentLength: number = 1; i < numbers.length; i++) {

        // Skip duplicates (they don't break or extend the sequence)
        if (numbers[i - 1] === numbers[i]) {
            continue;
        }

        // Check if current number continues the sequence
        if ((numbers[i - 1] + 1) === numbers[i]) {
            currentLength++;
        } else {
            // Reset sequence if not consecutive
            currentLength = 1;
        }

        // Update max length if current sequence is longer
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

// Test cases
let numbers: number[] = [100, 4, 200, 1, 3, 2];
numbers = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]; // expected 7
numbers = [2, 20, 4, 10, 3, 4, 5]; // expected 4

console.log(longestConsecutive(numbers)); // expected 4