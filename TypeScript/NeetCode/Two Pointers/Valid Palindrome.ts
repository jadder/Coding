class Solution {

    isPalindrome(input: string): boolean {
        // Remove all spaces (just in case there are multiple)
        input = input.replace(/\s+/g, "");

        // Remove all non-alphanumeric characters and convert to lowercase
        input = input.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();

        // Two pointers approach: start (left) and end (right)
        for (let left = 0, right = input.length - 1; left < right; left++, right--) {

            // If characters don't match → not a palindrome
            if (input[left] !== input[right]) {
                console.log(input[left] + " !== " + input[right]);
                return false;
            }
        }

        // If all characters matched → it's a palindrome
        return true;
    }
}


// Test
const sol: Solution = new Solution();
let input: string = "Was it a car or a cat I saw?";
// input = "tab a cat";

let result = sol.isPalindrome(input);
console.log(result);