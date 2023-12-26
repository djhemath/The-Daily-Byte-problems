/**
 * 
 * 
  "abcba", return true
  "foobof", return true (remove the first 'o', the second 'o', or 'b')
  "abccab", return false
 * 
 */

function isPalindromeWithRemoval(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  let isCharRemoved = false;
  let isLeftCharRemoved = false;
  let isRightCharRemoved = false;

  while(leftPointer < rightPointer) {
    console.log(string[leftPointer], string[rightPointer]);
    if(string[leftPointer] === string[rightPointer]) {
      leftPointer += 1;
      rightPointer -= 1;

      if(isLeftCharRemoved || isRightCharRemoved) {
        isCharRemoved = true;
      }
    } else {

      if(isCharRemoved) {
        return false;
      }

      if(isLeftCharRemoved && (!isRightCharRemoved)) {
        leftPointer -= 1;
      } else if(isRightCharRemoved && (!isLeftCharRemoved)) {
        rightPointer += 1;
      }

      if(!isLeftCharRemoved) {
        isLeftCharRemoved = true;
        leftPointer += 1;
      } else if(!isRightCharRemoved) {
        isRightCharRemoved = true;
        rightPointer -= 1;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(isPalindromeWithRemoval("abcba") === true);
console.log(isPalindromeWithRemoval("foobof") === true);
console.log(isPalindromeWithRemoval("abccab") === false);
console.log(isPalindromeWithRemoval("abca") === true);
console.log(isPalindromeWithRemoval("cbbcc") === true);
console.log(isPalindromeWithRemoval("axbcbaba") === false);


function isValidPalindrome(string, left, right, charRemoveCounter) {
  if(charRemoveCounter === 0) return false;

  while(left < right) {
    if(string[left] === string[right]) {
      left += 1;
      right -= 1;
    } else {
      return isValidPalindrome(string, left + 1, right, charRemoveCounter - 1) || isValidPalindrome(string, left, right - 1, charRemoveCounter - 1);
    }
  }

  return true;
}

function isPalindromeWithRemovalBest(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  return isValidPalindrome(string, leftPointer, rightPointer, 2);
}

console.log(isPalindromeWithRemovalBest("abcba") === true);
console.log(isPalindromeWithRemovalBest("foobof") === true);
console.log(isPalindromeWithRemovalBest("abccab") === false);
console.log(isPalindromeWithRemovalBest("abca") === true);
console.log(isPalindromeWithRemovalBest("cbbcc") === true);
console.log(isPalindromeWithRemovalBest("axbcbaba") === false);
console.log(isPalindromeWithRemovalBest("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga") === true);
