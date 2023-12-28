/**
 * 
 * 
 * Given two strings s and t return whether or not s is an anagram of t.
   Note: An anagram is a word formed by reordering the letters of another word.

  s = "cat", t = "tac", return true
  s = "listen", t = "silent", return true
  s = "program", t = "function", return false
 * 
 */

function validAnagram(s, t) {
  if(s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for(let i=0; i<s.length; i++) {
    const currentChar = s[i];

    if(!map.has(currentChar)) {
      map.set(currentChar, 0);
    }

    const count = map.get(currentChar) + 1;
    map.set(currentChar, count);
  }

  for(let j=0; j<t.length; j++) {
    const currentChar = t[j];

    if(!(map.has(currentChar))) {
      return false;
    } else {
      const count = map.get(currentChar);
      
      if(count > 0) {
        map.set(currentChar, count - 1);
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(validAnagram("cat", "tac") === true)
console.log(validAnagram("listen", "silent") === true)
console.log(validAnagram("program", "function") === false)