{  

/* https://neetcode.io/problems/anagram-groups/question
Group Anagrams
*/
function groupAnagrams(words: string[]): string[][] {
    // Time Complexity: O(n * k log k), where n = number of words, k = max length of a word
    // Space Complexity: O(n * k) for storing sorted words and the result array

    if (words.length === 0) return [[""]]; // quick return if input is empty

    // create a transformed array where each word is sorted alphabetically
    const sortedWords: string[] = [];
    for (const word of words) {
        sortedWords.push(word.split("").sort().join(""));
    }

    const visited: boolean[] = new Array(words.length).fill(false); // track which words we already grouped
    const result: string[][] = []; // final array of anagram groups

    // loop over each word
    for (let i = 0; i < words.length; i++) {
        if (visited[i]) continue; // skip if already added to a group

        const group: string[] = []; // temp array for this group
        const key = sortedWords[i]; // sorted word to compare with others

        // loop again to find all words matching the sorted key
        for (let j = 0; j < sortedWords.length; j++) {
            if (!visited[j] && sortedWords[j] === key) {
                group.push(words[j]); // add the original word
                visited[j] = true; // mark it as visited
            }
        }

        result.push(group); // add this group to the final result
    }

    return result;
}


// test it
const words2 = ["act", "pots", "tops", "cat", "stop", "hat"];
const result2 = groupAnagrams(words2);
console.log(result2);
// output: [ [ 'act', 'cat' ], [ 'pots', 'tops', 'stop' ], [ 'hat' ] ]
}