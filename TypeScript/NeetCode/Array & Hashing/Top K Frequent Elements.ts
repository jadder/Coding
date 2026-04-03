// Top K Frequent Elements
// https://neetcode.io/problems/top-k-elements-in-list/question?list=neetcode250
// Time Complexity: O(n * k)
// Space Complexity: O(n)
function topKFrequent(nums: number[], k: number): number[] {
    // create a map to store number -> frequency
    let freqMap = new Map<number, number>();

    // iterate the array and count how many times each number appears
    for (const num of nums) {
        if (freqMap.has(num)) {
            // if it already exists, increment the counter
            freqMap.set(num, freqMap.get(num) + 1);
        } else {
            // if it does not exist, initialize it with 1
            freqMap.set(num, 1);
        }
    }

    let result: number[] = [];

    // run k times to find the k most frequent elements
    for (let i = 0; i < k; i++) {

        // start with the smallest possible value
        let max: number = Number.MIN_SAFE_INTEGER;
        let keyWithMax: number = 0;

        // iterate the map to find the element with highest frequency
        for (const [key, value] of Array.from(freqMap)) {
            if (value > max) {
                max = value;
                keyWithMax = key;
            }
        }

        // push the most frequent element into result
        result.push(keyWithMax);

        // remove it so it is not considered again
        freqMap.delete(keyWithMax);
    }

    return result;
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log("Se acabo");