/**
 * 
 * 
 * Given a string, return the index of its first unique character. If a unique character does not exist, return -1. 
 * 
  "abcabd", return 2
  "thedailybyte", return 1
  "developer", return 0
 * 
 */

// T - O(N)
// S - O(N)
function firstUniqueCharacter(string) {
  const map = new Map();

  for(let i=0; i<string.length; i++) {
    const character = string[i];

    const value = map.get(character);

    if(value === undefined) {
      map.set(character, {count: 1, index: i});
    } else {
      map.set(character, {count: value.count + 1, index: i});
    }
  }

  for(let key of map.keys()) {
    const value = map.get(key);
    if(value.count === 1) {
      return value.index;
    }
  }

  return -1
}

console.log(firstUniqueCharacter("abcabd") === 2);
console.log(firstUniqueCharacter("thedailybyte") === 1);
console.log(firstUniqueCharacter("developer") === 0);