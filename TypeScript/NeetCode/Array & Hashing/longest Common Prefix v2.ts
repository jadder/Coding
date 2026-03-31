// Function to find the longest common prefix among an array of strings (Version 2)
function longestCommonPrefixV2(words: string[]): string {
    // Return empty string if input array is empty
    if (!words.length) return "";

    // Find the shortest word in the array
    // This ensures we don’t go out of bounds when checking characters
    const shortestWord = words.reduce((a, b) => a.length < b.length ? a : b);

    // Initialize prefix string
    let prefix = "";

    // Loop through each character index of the shortest word
    for (let i = 0; i < shortestWord.length; i++) {
        const char = shortestWord[i];

        // Check if every word has the same character at this index
        if (words.every(word => word[i] === char)) {
            prefix += char;  // Add to prefix if all words match
        } else {
            break;           // Stop if mismatch is found
        }
    }

    return prefix; // Return the longest common prefix
}


// ---------- TEST ----------

// Input array
let inputWords: string[] = ["dance", "dag", "danger", "damage"];

// Expected output
let expectedOutput: string = "da";

// Run the function
let resultV2: string = longestCommonPrefixV2(inputWords);

// Verify result
if (resultV2 === expectedOutput) {
    console.log("Passed");
} else {
    console.log(`Failed result: ${resultV2}`);
}