//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/
export const isPangram = (phrase: string): boolean => {
  // Convert whole phrase to lowercase so we count letters uniformly
  phrase = phrase.toLowerCase();

  // Use a Set to store unique letters we find
  let letras = new Set<string>();

  // Function to check if a character is a letter
  const isAlpha = (str: string): boolean => {
    return /^[a-zA-Z]+$/.test(str);
  };

  // Go through each character in the phrase
  for (const c of phrase) {
    // If it's a letter, add it to the Set
    if (isAlpha(c)) {
      letras.add(c);
    }
  }

  // If we have all 26 letters, it's a pangram
  return letras.size === 26;
}

