class Solution {
    /**
     * Time Complexity: O(n + m)
     * - We iterate through both strings once.
     * - n = word1.length, m = word2.length
     * 
     * Space Complexity: O(n + m)
     * - We build a new string that contains all characters from both inputs.
     */

    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {

        // This will store the final merged result
        let result = "";

        // i -> pointer for word1
        // j -> pointer for word2
        // Loop continues until BOTH strings are fully traversed
        for (let i = 0, j = 0; i < word1.length || j < word2.length; i++, j++) { 

            // If we still have characters in word1, add one
            if (i < word1.length) {
                result += word1[i];
            }

            // If we still have characters in word2, add one
            if (j < word2.length) {
                result += word2[j];
            }
        }

        // Return the final merged string
        return result;
    }
}