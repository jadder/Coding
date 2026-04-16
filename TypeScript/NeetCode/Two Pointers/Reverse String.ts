class Solution {    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]) {

        for (let i = 0, f = s.length - 1; i < f; i++, f--) {
            [s[i], s[f]] = [s[f], s[i]];
        }
    }
}

let s: string[] = ["n", "e", "e", "t"];
s = ["r","a","c","e","c","a","r"];      // ["r","a","c","e","c","a","r"]

let sol = new Solution()
sol.reverseString(s);
console.log(s);