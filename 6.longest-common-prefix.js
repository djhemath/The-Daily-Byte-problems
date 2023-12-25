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