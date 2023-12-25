/**
 * 
 * 
  ["colorado", "color", "cold"], return "col"
  ["a", "b", "c"], return ""
  ["spot", "spotty", "spotted"], return "spot"
 *
 * 
 * Assumptions:
 * 1. All strings contain only lowercase alphabetical characters
 */

// O(m*n) -> m - len of first word, n -> len of input
function longestCommonPrefix(strings=[]) {
  let prefix = '';

  const word = strings[0];

  for(let i=0; i<word.length; i++) {
    const char = word[i];

    let isCharFoundInAllStrings = true;
    for(let j=0; j<strings.length; j++) {
      const string = strings[j];

      if(string[i] !== char) {
        isCharFoundInAllStrings = false;
        break;
      }
    }

    if(isCharFoundInAllStrings) {
      prefix += char;
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["colorado", "color", "cold"]) === "col")
console.log(longestCommonPrefix(["a", "b", "c"]) === "")
console.log(longestCommonPrefix(["spot", "spotty", "spotted"]) === "spot")
console.log(longestCommonPrefix(["flouride", "flour", "fl"]) === "fl")
console.log(longestCommonPrefix(["flouride", "flour", "fl"].reverse()) === "fl")


// O(n) - because of sorting
function longestCommonPrefixBest(strings=[]) {
  let prefix = '';

  // Sort first, compare only first and last word
  strings.sort(); // O(n)

  const firstWord = strings[0];
  const lastWord = strings[strings.length - 1];

  for(let i=0; i<firstWord.length; i++) {
    const firstWordChar = firstWord[i];
    const lastWordChar = lastWord[i];

    if(firstWordChar === lastWordChar) {
      prefix += firstWordChar;
    } else {
      break;
    }
  }

  return prefix;
};

console.log(longestCommonPrefixBest(["colorado", "color", "cold"]) === "col")
console.log(longestCommonPrefixBest(["a", "b", "c"]) === "")
console.log(longestCommonPrefixBest(["spot", "spotty", "spotted"]) === "spot")
console.log(longestCommonPrefixBest(["flouride", "flour", "fl"]) === "fl")
console.log(longestCommonPrefixBest(["flouride", "flour", "fl"].reverse()) === "fl")