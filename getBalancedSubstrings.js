function getBalancedSubstrings(S) {
  const result = [];
  const charCount = {};

  for (let i = 0; i < S.length; i++) {
    // Reset character count for each new starting character
    charCount[S[i]] = 1;

    for (let j = i + 1; j < S.length; j++) {
      charCount[S[j]] = (charCount[S[j]] || 0) + 1;

      // Check if there are exactly two different characters
      if (Object.keys(charCount).length === 2) {
        const [char1, char2] = Object.keys(charCount);
        const count1 = charCount[char1];
        const count2 = charCount[char2];

        // Check if both characters appear exactly the same number of times
        if (count1 === count2) {
          result.push(S.substring(i, j + 1));
        }
      }
    }
  }

  // Find the longest balanced substrings
  const maxLength = result.reduce((max, str) => Math.max(max, str.length), 0);
  return result.filter((str) => str.length === maxLength);
}

// Examples
console.log(getBalancedSubstrings("cabbacc")); // ["abba"]
console.log(getBalancedSubstrings("abababa")); // ["ababab", "bababa"]
console.log(getBalancedSubstrings("aaaaaaa")); // []
