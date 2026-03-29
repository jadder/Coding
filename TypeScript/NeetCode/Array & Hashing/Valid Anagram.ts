/**
 * Checks if two strings are anagrams of each other
 * @param s - first string
 * @param t - second string
 * @returns true if s and t are anagrams, false otherwise
 */
function isAnagram(s: string, t: string): boolean {
    
    // If lengths are different, they can't be anagrams
    if(s.length !== t.length) return false;

    // Quick check for single-character strings
    if(s.length === 1){
        if(s === t) return true; // same char → anagram
        else return false;       // different char → not an anagram
    }

    // Loop through each character in s
    for(const e of s){
        // Find index of current character in t
        const i: number = t.indexOf(e);

        // If the character is not in t, it's not an anagram
        if(i === -1){
            return false;
        }

        // Remove the found character from t so we don't reuse it
        t = t.slice(0, i) + t.slice(i + 1);
    }

    // If we removed all characters and didn't fail, they are anagrams
    return true;
}

// Example usage
const s: string = "bccc";
const t: string = "ccbc";

console.log(isAnagram(s, t)); // true