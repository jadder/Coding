{
    class Solution {
        /**
         * @param {number[]} nums
         * @return {number[][]}
         */
        threeSum(nums: number[]): number[][] {
            let result: number[][] = [];

            for (let left = 0; left < nums.length - 2; left++) {
                for (let right = left + 1; right < nums.length - 1; right++) {
                    for (let middle = right + 1; middle < nums.length; middle++) {
                        if (nums[left] + nums[middle] + nums[right] === 0) {
                            result.push([nums[left], nums[right], nums[middle]]);
                        }
                    }
                }
            }

            return result;
        }

    }

    let input: number[] = [-1, 0, 1, 2, -1, -4];    // [[-1,-1,2],[-1,0,1]]
    let sol: Solution = new Solution();
    const result = sol.threeSum(input);
    console.log(result);
}