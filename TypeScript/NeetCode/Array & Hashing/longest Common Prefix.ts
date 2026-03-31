// Function to find the longest common prefix among an array of strings
function longestCommonPrefix(words: string[]): string {
    // If the array is empty, return empty string
    if (words.length === 0) return "";

    // Find the shortest word in the array
    // This ensures we don't go out of bounds when checking indices
    const shortestWord = words.reduce((min, word) =>
        word.length < min.length ? word : min
    );

    // Array to store the characters of the common prefix
    let prefixChars: string[] = [];
    
    // Loop through each character index of the shortest word
    for (let idx = 0; idx < shortestWord.length; idx++) {
        let canAdd: boolean = true;           // Flag to track if this character matches all words
        const currentChar: string = shortestWord[idx]; // Character from the shortest word

        // Compare this character with the same index in all words
        for (const word of words) {
            if (idx < word.length) {          // Extra safety check (optional)
                if (currentChar !== word[idx]) {
                    canAdd = false;          // Mismatch found
                    break;                   // Stop checking other words
                }
            }else{
                canAdd = false;
                break;
            }
        }

        if (canAdd) {
            prefixChars.push(currentChar);    // Add the character to prefix if all words match
        } else {
            break;                            // Stop loop if mismatch is found
        }
    }

    // Join the array of characters into a string and return it
    return prefixChars.join("");
}


// ---------- TEST ----------

// Input array
let input: string[] = ["dance", "dag", "danger", "damage"];

// Expected output
let expected: string = "da";

// Run the function
let result: string = longestCommonPrefix(input);

// Verify the result
if (result === expected) {
    console.log("Passed");
} else {
    console.log(`Failed result: ${result}`);
}