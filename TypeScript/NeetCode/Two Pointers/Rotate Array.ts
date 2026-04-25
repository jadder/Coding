{
    class Solution {
        /**
         * @param {number[]} nums
         * @param {number} k
         * @return {void} Do not return anything, modify nums in-place instead.
         */
        rotate(nums: number[], k: number) {
            for (let r = 0; r < k; r++) {

                let temp1 = 0;
                let temp2 = nums[nums.length - 1];

                for (let i = 0; i < nums.length; i++) {
                    temp1 = nums[i];
                    nums[i] = temp2;
                    temp2 = temp1;
                }
            }
        }
    }

    let sol: Solution = new Solution();
    let input: number[] = [1, 2, 3, 4, 5, 6];
    console.log(input);
    sol.rotate(input, 3);
    console.log(input);
}