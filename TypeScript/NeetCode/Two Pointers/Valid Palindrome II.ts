class Solution {

    validPalindrome(s: string): boolean {
        // left pointer (starts before the string)
        let left: number = -1;
        // right pointer (starts after the string)
        let right: number = s.length;

        // counter to track how many mismatches we allow
        // we only allow ONE removal
        let mismatchCount: number = -1;

        // iterate while pointers don't cross
        while (left < right) {
            left++;
            right--;

            // if characters match, continue normally
            if (s[left] === s[right]) {
                continue;
            } else {
                // we found a mismatch
                mismatchCount++;

                // if more than 1 mismatch → not valid
                if (mismatchCount > 0) { 
                    return false; 
                }

                // try to "skip" one character
                // idea: check if skipping left works
                // compare next 2 chars on left vs current on right
                if ((s[left + 1] + s[left + 2]) === (s[right] + s[right - 1])) {
                    // skip left character
                    left++;
                } else {
                    // otherwise skip right character
                    right--;
                }
            }
        }

        return true;
    }
}


// ---------------- TESTS ----------------

const tests: { input: string; expected: boolean }[] = [
    { input: "abccdba", expected: true },
    { input: "deeee", expected: true },
    { input: "racecar", expected: true },
    { input: "abc", expected: false },
    { input: "abca", expected: true },
    { input: "abbca", expected: true },
    { input: "a", expected: true },
    { input: "aa", expected: true },
    { input: "baa", expected: true },
    { input: "abcba", expected: true },
    { input: "abecbea", expected: false },
];

const sol = new Solution();

let allPassed = true;

for (const { input, expected } of tests) {
    const result = sol.validPalindrome(input);

    if (result !== expected) {
        console.log("❌ FAILED");
        console.log("Input   :", input);
        console.log("Expected:", expected);
        console.log("Got     :", result);
        allPassed = false;
    }
}

if (allPassed) {
    console.log("✅ PASSED");
}