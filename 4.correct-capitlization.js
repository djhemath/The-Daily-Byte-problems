/**
 * 
  "USA", return true
  "Calvin", return true
  "compUter", return false
  "coding", return true
 * 
 * All letters are capitalized
 * No letters are capitalized
 * Only the first letter is capitalized
 */


// !NOTE: This can be optimized by hardcoding capitalized letters
// But it's still O(1) in both time and space
const capitalizedLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const capitalizedLettersMap = {};

for(let i=0; i<capitalizedLetters.length; i++) {
  capitalizedLettersMap[capitalizedLetters[i]] = true;
}

// Time -> O(n)
function isCapitalizedCorrectly(word) {
  if(!word || typeof word !== 'string') {
    return false;
  }

  let numberOfCapitalizedLetters = 0;
  let lastCapitalizedCharacterIndex = 0;

  for(let i=0; i<word.length; i++) {
    const character = word[i];

    if(capitalizedLettersMap[character]) {
      numberOfCapitalizedLetters += 1;
      lastCapitalizedCharacterIndex = i;
    }
  }

  // console.log(numberOfCapitalizedLetters, lastCapitalizedCharacterIndex)

  return (
    (numberOfCapitalizedLetters === word.length) ||                           // All letters are capitalized
    (numberOfCapitalizedLetters === 0) ||                                     // No letters are capitalized
    (numberOfCapitalizedLetters === 1 && lastCapitalizedCharacterIndex === 0) // Only the first letter is capitalized
  );
}

console.log(isCapitalizedCorrectly('USA') === true);
console.log(isCapitalizedCorrectly('Calvin') === true);
console.log(isCapitalizedCorrectly('compUter') === false);
console.log(isCapitalizedCorrectly('coding') === true);
console.log(isCapitalizedCorrectly('') === false);
console.log(isCapitalizedCorrectly(null) === false);
console.log(isCapitalizedCorrectly(undefined) === false);
console.log(isCapitalizedCorrectly(true) === false);