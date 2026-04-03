/*
    https://neetcode.io/problems/anagram-groups/question
    Group Anagrams
    Time Complexity: O(n * k log k) -> n = number of words, k = length of the longest word
    Space Complexity: O(n * k) for storing sorted words + result array
*/
function groupAnagrams(strs: string[]): string[][] {

    if (strs.length === 0) { return [[""]]; } // quick return if input is empty

    // create a new array where each word is sorted alphabetically
    let sortedWords: string[] = [];
    for (const word of strs) {
        sortedWords.push(word.split("").sort().join(""));
    }

    let visited: boolean[] = new Array(strs.length).fill(false); // track which words have been grouped
    let result: string[][] = new Array(); // final output array

    for (let r = 0; r < strs.length; r++) {

        if (visited[r]) {
            continue; // skip if already visited
        } else {
            let group: string[] = new Array(); // temporary group array
            let key: string = ""; // to compare sorted words

            for (let i = 0; i < sortedWords.length; i++) {
                if (!visited[i]) {
                    if (group.length === 0) { // first element of this group
                        group.push(strs[i]);
                        key = sortedWords[i];
                        visited[i] = true;
                        continue;
                    } else {
                        if (key === sortedWords[i]) { // if same sorted value
                            group.push(strs[i]);
                            visited[i] = true;
                        } else { continue; }
                    }
                } else {
                    continue; // already visited, skip
                }
            }
            result.push(group); // add group to result
        }
    }
    return result;
}


const words = ["act", "pots", "tops", "cat", "stop", "hat"];
const expected = [["hat"], ["act", "cat"], ["stop", "pots", "tops"]];

const result = groupAnagrams(words);
console.log(result);
