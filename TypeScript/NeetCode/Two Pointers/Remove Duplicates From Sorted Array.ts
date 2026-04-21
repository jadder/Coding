{
    class Solution {
        /**
         * @param {number[]} nums
         * @return {number}
         */
        removeDuplicates(nums: number[]): number {
            let tam: number = nums.length;

            if (tam <= 1) return tam;
            if (tam === 2) return (nums[0] === nums[1]) ? 1 : 2;

            let k: number = 1;
            for (let i = 1; i < nums.length; i++) {
                if (nums[i] !== nums[i - 1]) {
                    nums[k] = nums[i];
                    k++;
                }
            }


            return k;
        }
    }

    function runTests() {
        const solution = new Solution();

        const tests = [

            {
                input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
                expectedK: 5,
                expectedNums: [0, 1, 2, 3, 4]
            },
            {
                input: [1, 1, 2],
                expectedK: 2,
                expectedNums: [1, 2]
            },
            {
                input: [],
                expectedK: 0,
                expectedNums: []
            },
            {
                input: [1],
                expectedK: 1,
                expectedNums: [1]
            },
            {
                input: [1, 1, 1, 1],
                expectedK: 1,
                expectedNums: [1]
            },
            {
                input: [1, 2, 3, 4],
                expectedK: 4,
                expectedNums: [1, 2, 3, 4]
            },
            {
                input: [-3, -3, -2, -1, -1, 0, 0, 1],
                expectedK: 5,
                expectedNums: [-3, -2, -1, 0, 1]
            },
            {
                input: [2, 2, 2, 3, 3, 4, 5, 5, 6],
                expectedK: 5,
                expectedNums: [2, 3, 4, 5, 6]
            }
        ];

        tests.forEach((test, index) => {
            const nums = [...test.input];
            const k = solution.removeDuplicates(nums);
            const resultNums = nums.slice(0, k);

            const passK = k === test.expectedK;
            const passNums = JSON.stringify(resultNums) === JSON.stringify(test.expectedNums);

            console.log();
            console.log(`Test ${index + 1}: ${passK && passNums ? "✅ PASS" : "❌ FAIL"}`);
            if (!passK || !passNums) {
                console.log("  Input:", test.input);
                console.log("  Expected k:", test.expectedK, "Got:", k);
                console.log("  Expected nums:", test.expectedNums, "Got:", resultNums);
            }
        });
    }

    // Ejecutar:
    runTests();
} 