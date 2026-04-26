/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(1) (ignoring sort internal implementation stack)
 * 
 * Explanation:
 * - Sorting takes O(n log n)
 * - Two pointers scan the array once => O(n)
 * - Overall dominated by sorting
 */

class Solution {
    /**
     * Greedy approach:
     * Pair the lightest person with the heaviest possible person.
     * If they fit within the limit, move both pointers.
     * Otherwise, send the heaviest alone.
     *
     * @param {number[]} people - array of people's weights
     * @param {number} limit - max weight per boat
     * @return {number} minimum number of boats required
     */
    numRescueBoats(people: number[], limit: number): number {
        let boats = 0;

        // Sort people by weight to use two pointers strategy
        people.sort((a, b) => a - b);

        let left = 0;
        let right = people.length - 1;

        // Try to pair lightest with heaviest
        while (left <= right) {

            // If lightest + heaviest fits, move left pointer
            if (people[left] + people[right] <= limit) {
                left++;
            }

            // Always move right pointer (heaviest person is always used)
            right--;

            // One boat is used per iteration
            boats++;
        }

        return boats;
    }
}

// -------------------- TEST --------------------

let sol: Solution = new Solution();

let input: number[] = [3, 5, 3, 4];
let limit = 5;

let result: number = sol.numRescueBoats(input, limit);

if (result !== 4) {
    console.log("❌ Failed.", result);
} else {
    console.log("✅ Passed.");
}