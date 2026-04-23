{
    class Solution {
        /**
         * @param {number[]} numbers
         * @param {number} target
         * @return {number[]}
         */
        twoSum(numbers: number[], target: number) {
            let left = 0, right = numbers.length - 1;

            while (left < right) {
                let sum: number = numbers[left] + numbers[right];
                if (sum > target) {
                    right--;
                } else {
                    left++;
                }
            }

            return [left + 1, right + 1];
        }
    }


    // 👇 "tests" simples tipo entrevista
    const sol = new Solution();

    function runTest(numbers: number[], target: number, expected: number[]) {
        const result = sol.twoSum(numbers, target);
        const pass = JSON.stringify(result) === JSON.stringify(expected);

        console.log(pass ? "✅ PASS" : "❌ FAIL");
        console.log("input:", numbers, "target:", target);
        console.log("expected:", expected, "got:", result);
        console.log("--------------");
    }

    // Casos
    runTest([-1000, -999, 0, 999, 1000], -1, [1, 2]);
    runTest([1, 2, 3, 4], 3, [0, 1]);
    runTest([-1, -2, -3, -4, -5], -8, [2, 4]);
    runTest([1, 2, 3, 4], 6, [1, 3]);
    runTest([2, 7, 11, 15], 9, [0, 1]);
    runTest([3, 3], 6, [0, 1]);
}