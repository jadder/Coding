"use strict";
// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s) {
    if (s.length === 0)
        return 0;
    if (s.length === 1)
        return 1;
    if (s.length === 2)
        return s[0] === s[1] ? 1 : 2;
    let exit = false;
    let leftWindow = -1;
    let rightWindow = -1;
    const seen = new Set();
    let answer = 0;
    let maxLen = 0;
    let rvalue = '';
    let lvalue = '';
    while (!exit) {
        if (rightWindow + 1 < s.length) {
            rightWindow++;
            rvalue = s[rightWindow];
            if (!seen.has(rvalue)) {
                seen.add(rvalue);
                answer++;
                if (answer > maxLen) {
                    maxLen = answer;
                }
            }
            else {
                if (leftWindow < rightWindow) {
                    leftWindow++;
                    lvalue = s[leftWindow];
                    seen.delete(lvalue);
                    rightWindow--;
                    answer--;
                }
                else {
                    break;
                }
            }
        }
        else {
            exit = true;
        }
    }
    return maxLen;
}
// test code
let testData = [
    "abcabcbb",
    "bbbbb",
    "pwwkew",
];
for (let td of testData) {
    let r = lengthOfLongestSubstring(td);
    console.log(r);
}
