{
    class Solution {
        /**
         * @param {number[]} people
         * @param {number} limit
         * @return {number}
         */
        numRescueBoats(people: number[], limit: number): number {
            let result = 0;
            people.sort((a, b) => a - b);

            for (let l = 0, r = people.length - 1; l <= r;) {
                if ((people[l] + people[r]) <= limit) {
                    l++;
                }
                r--;
                result++;
            }

            return result;
        }
    }

    let sol: Solution = new Solution();
    let input: number[] = [3, 5, 3, 4]; //4
    let limit = 5;

    let result: number = sol.numRescueBoats(input, limit);
    if (result !== 4) {
        console.log("❌ Failed.", result);
    } else {
        console.log("✅ Passed.");
    }
}