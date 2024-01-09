/**
 * 
 * Given a string only containing the following characters (, ), {, }, [, and ] return whether or not the opening and closing characters are in a valid order. 
 * 
 * "(){}[]", return true
   "(({[]}))", return true
   "{(})", return false
 * 
 */

// T -> O(n)
// S -> O(n)
function validateCharacters(string='') {
  if(!string || typeof string !== 'string' || string.length === 0 || ((string.length % 2) !== 0)) {
    return false;
  }

  const characterStack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for(let i=0; i<string.length; i++) {
    const character = string[i];

    if(pairs[character]) {
      characterStack.push(character);
    } else {
      const lastCharacterInTheStack = characterStack.pop();

      if(character !== pairs[lastCharacterInTheStack]) {
        return false;
      }
    }
  }

  return characterStack.length === 0;
}

console.log(validateCharacters("(){}[]") === true);
console.log(validateCharacters("(({[]}))") === true);
console.log(validateCharacters("{(})") === false);
console.log(validateCharacters("[") === false);
console.log(validateCharacters("[(") === false);
console.log(validateCharacters("") === false);
console.log(validateCharacters(null) === false);