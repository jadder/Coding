// ===============================
// MAJORITY ELEMENT (> n/3 times)
// My approach: frequency counter (hash map)
// ===============================

function majorityElement(nums: number[]): number[] {
    // Edge case: empty input
    if (nums.length === 0) return [];

    // Threshold: any number must appear more than n/3 times
    const threshold = nums.length / 3;

    // Frequency map (number -> count)
    const frequencyMap: Record<number, number> = {};

    // O(n) time: build frequency map
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    const result: number[] = [];

    // O(k), where k = unique elements
    for (const key of Object.keys(frequencyMap)) {
        const numKey = Number(key);
        const count = frequencyMap[numKey];

        if (count > threshold) {
            result.push(numKey);
        }
    }

    return result;
}

type TestCase = {
    nums: number[];
    expected: number[];
};

function arraysEqual(a: number[], b: number[]): boolean {
    if (a.length !== b.length) return false;

    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) return false;
    }

    return true;
}

const testCases: TestCase[] = [
    { nums: [5, 2, 3, 2, 2, 2, 2, 5, 5, 5], expected: [2, 5] },
    { nums: [4, 4, 4, 4, 4], expected: [4] },
    { nums: [1, 2, 3], expected: [] },
    { nums: [3, 2, 3], expected: [3] },
    { nums: [2, 2, 1], expected: [2] },
    { nums: [1, 3, 3, 3, 2], expected: [3] },
    { nums: [5, 5, 5, 5], expected: [5] },
    { nums: [10], expected: [10] },
    { nums: [7, 7], expected: [7] },
    { nums: [-1, -1, -1, 2, 3], expected: [-1] },
    { nums: [4, 4, 2, 4, 1, 4, 3], expected: [4] },
    { nums: [6, 1, 6, 2, 6, 3, 6], expected: [6] },
    { nums: [9, 9, 1, 9, 2], expected: [9] },
    { nums: [1000000, 1000000, 1], expected: [1000000] },
    { nums: [], expected: [] },
];

function runTests() {
    let passed = 0;

    testCases.forEach((test, index) => {
        const result = majorityElement(test.nums);

        const ok = arraysEqual(result, test.expected);

        if (ok) {
            console.log(`✅ Test ${index + 1} passed`);
            passed++;
        } else {
            console.log(`❌ Test ${index + 1} failed`);
            console.log(`   Input:    ${JSON.stringify(test.nums)}`);
            console.log(`   Expected: ${JSON.stringify(test.expected)}`);
            console.log(`   Got:      ${JSON.stringify(result)}`);
        }
    });

    console.log(`\nResult: ${passed}/${testCases.length} passed`);
}

runTests();