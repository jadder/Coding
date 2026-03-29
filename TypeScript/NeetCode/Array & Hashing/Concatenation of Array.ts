class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number []) {
            // warmup excersie, (concat arrays)
           return [].concat(nums, nums);
    }
}

const nums : number[] = [1,2,3, 4, 5, 6, 7];
const ans: number[] = new Solution().getConcatenation(nums);
console.log(ans);
console.log("end")