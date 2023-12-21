/**
 * 
 * Ex: given strings

    "level", return true
    "algorithm", return false
    "A man, a plan, a canal: Panama.", return true
 * 
 */


// Though it's O(1) in time, it still does have a loop. We can minimize it even further with multiple conditional clauses.
function isAlpha(character) {
  const lowerCaseAlphabeticalCharacters = 'qwertyuiopasdfghjklzxcvbnm'
  const alphabeticalCharacters =  lowerCaseAlphabeticalCharacters.split('');

  return alphabeticalCharacters.includes(character.toLowerCase());
}

function iterativeSolution(string) {
  let leftPointer = 0;
  let rightPointer = string.length -1;

  for(let i=0; i<Math.ceil(string.length/2); i++) {
    let leftCharacter = string[leftPointer];
    let rightCharacter = string[rightPointer];

    while(!isAlpha(leftCharacter) && (leftPointer < rightPointer)) {
      leftPointer += 1;
      leftCharacter = string[leftPointer]
    }

    while(!isAlpha(rightCharacter) && (rightPointer > leftPointer)) {
      rightPointer -= 1;
      rightCharacter = string[rightPointer];
    }

    if(leftCharacter.toLowerCase() !== rightCharacter.toLowerCase()) {
      return false;
    }

    if(leftPointer >= rightPointer) {
      break;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return true;
}

function betterIterativeSolution(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while(leftPointer <= rightPointer) {
    let leftCharacter = string[leftPointer];
    let rightCharacter = string[rightPointer];

    while(!isAlpha(leftCharacter)) {
      leftPointer += 1;
      leftCharacter = string[leftPointer];
    }

    while(!isAlpha(rightCharacter)) {
      rightPointer -= 1;
      rightCharacter = string[rightPointer];
    }

    if(leftCharacter.toLowerCase() !== rightCharacter.toLowerCase()) {
      return false;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return true
}

function bestIterativeSolution(string) {
  let leftPointer = 0;
  let rightPointer = string.length - 1;

  while(leftPointer <= rightPointer) {
    let leftCharacter = string[leftPointer];
    let rightCharacter = string[rightPointer];

    if(!isAlpha(leftCharacter)) {
      leftPointer += 1;
      continue;
    }

    if(!isAlpha(rightCharacter)) {
      rightPointer -= 1;
      continue;
    }

    if(leftCharacter.toLowerCase() !== rightCharacter.toLowerCase()) {
      return false;
    }

    leftPointer += 1;
    rightPointer -= 1;
  }

  return true
}

function isAValidPalindrome(string) {
  // return iterativeSolution(string);
  // return betterIterativeSolution(string);
  return bestIterativeSolution(string);
}

console.log(isAValidPalindrome("level") === true)
console.log(isAValidPalindrome("algorithm") === false)
console.log(isAValidPalindrome("A man, a plan, a canal: Panama.") === true)
console.log(isAValidPalindrome("") === true)