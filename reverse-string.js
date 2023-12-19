/**
 * 
 * Ex: Given the following strings...

    “Cat”, return “taC”
    “The Daily Byte”, return "etyB yliaD ehT”
    “civic”, return “civic”
 * 
 */


// Time: O(n)
// Space: O(n)
function additionalString(string) {
  let str = '';

  for(let i=string.length-1; i>=0; i--) {
    str += string[i];
  }

  return str;
}


// Time: O(n/2) -> O(n)
// Space: O(n)
function swappingPositions(string) {
  const charArray = string.split('');

  for(let i=0; i<((string.length-1)/2); i++) {
    const leftChar = string[i];
    const rightChar = string[string.length - 1 - i];

    charArray[i] = rightChar;
    charArray[string.length - 1 - i] = leftChar;
  }

  return charArray.join('');
}

function reverseString(string) {
  // return additionalString(string);
  return swappingPositions(string);
}

console.log(reverseString("Cat") === "taC");
console.log(reverseString("The Daily Byte") === "etyB yliaD ehT");
console.log(reverseString("civic") === "civic");