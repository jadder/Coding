{
    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} target
         * @return {number[][]}
         */
        fourSum(nums: number[], target: number): number[][] {
            nums.sort((a, b) => a - b);
            let result: number[][] = [];

            let left: number = 0;
            let right: number = nums.length - 1;

            for (let i = 0; i < nums.length - 3; i++) {
                if (i > 0 && nums[i] === nums[i - 1]) continue;

                for (let j = i + 1; j < nums.length - 2; j++) {
                    if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                    left = j + 1;
                    right = nums.length - 1;
                    // if(nums[left] == nums[left-1]) continue;
                    while (left < right) {

                        let sum: number = nums[i] + nums[j] + nums[left] + nums[right];
                        if (sum === target) {
                            result.push([nums[i], nums[j], nums[left], nums[right]]);
                            left++;
                            right--;

                            while (left < right && nums[left] === nums[left - 1]) left++;
                            while (left < right && nums[right] === nums[right + 1]) right--;

                        } else if (sum > target) {
                            right--;
                        } else if (sum < target) {
                            left++;
                        }
                    }
                }
            }

            return result;
        }
    }

    function arraysEqual(a: number[][], b: number[][]): boolean {
        const normalize = (arr: number[][]) =>
            arr
                .map(inner => inner.slice().sort((x, y) => x - y))
                .sort((a, b) => a.join(',').localeCompare(b.join(',')));

        const na = normalize(a);
        const nb = normalize(b);

        return JSON.stringify(na) === JSON.stringify(nb);
    }

    function runTest(
        nums: number[],
        target: number,
        expected: number[][]
    ) {
        const solution = new Solution();
        const result = solution.fourSum(nums, target);

        const pass = arraysEqual(result, expected);

        console.log("Input:", nums, "Target:", target);
        console.log("Expected:", expected);
        console.log("Got:", result);
        console.log(pass ? "✅ PASS\n" : "❌ FAIL\n");
    }

    // TEST CASES
    runTest(
        [1, 0, -1, 0, -2, 2],
        0,
        [
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1],
        ]
    );

    runTest(
        [2, 2, 2, 2, 2],
        8,
        [
            [2, 2, 2, 2]
        ]
    );

    runTest(
        [],
        0,
        []
    );

    runTest(
        [0, 0, 0, 0],
        0,
        [
            [0, 0, 0, 0]
        ]
    );
}