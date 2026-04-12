function subarraySum(nums: number[], k: number): number {
    let result: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        let temp: number = 0;
        for (let j: number = i; j < nums.length; j++) {
            temp += nums[j];
            if (temp === k) {
                result++;
            }
        }
    }
    return result;
}


// Test cases

type TestCase = {
    nums: number[];
    k: number;
    expected: number;
};

const tests: TestCase[] = [
    // 🟢 Básicos
    { nums: [3, -1, -2, 5, -3, 1], k: 3, expected: 4 },
    { nums: [1, 2, 3, -3, 1, 2], k: 3, expected: 6 },
    { nums: [1, 1, 1], k: 2, expected: 2 },
    { nums: [5], k: 5, expected: 1 },
    { nums: [5], k: 3, expected: 0 },

    // 🟡 Negativos
    { nums: [1, -1, 1, -1, 1], k: 0, expected: 6 },
    { nums: [-1, -1, -1], k: -2, expected: 2 },

    // 🔵 Ceros
    { nums: [0, 0, 0, 0], k: 0, expected: 10 },
    { nums: [0, 1, 0, 1, 0], k: 1, expected: 8 },

    // 🟣 Overlapping
    { nums: [1, 2, 1, 2, 1], k: 3, expected: 4 },
    { nums: [2, -1, 1, 2], k: 2, expected: 4 },

    // 🔴 Edge
    { nums: [1, 2, 3], k: 10000000, expected: 0 },
    { nums: [-1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000, -1000], k: -5000, expected: 6 },

    // 🟠 Prefijos
    { nums: [3, 4, 7, 2, -3, 1, 4, 2], k: 7, expected: 4 },

    // 🧠 Tricky
    { nums: [1, -1, 1, -1, 1, -1], k: 0, expected: 9 },
];

function runTests() {
    tests.forEach((test, index) => {
        const result = subarraySum(test.nums, test.k);

        if (result !== test.expected) {
            console.log(`❌ Test ${index + 1} FAILED`);
            console.log(`   nums = [${test.nums}]`);
            console.log(`   k = ${test.k}`);
            console.log(`   expected = ${test.expected}`);
            console.log(`   got = ${result}`);
        }
    });
}

runTests();