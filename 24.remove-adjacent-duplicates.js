/**
 * 
 * Given a string s containing only lowercase letters, continuously remove adjacent characters that are the same and return the result. 
 * 
 * s = "abccba", return ""
   s = "foobar", return "fbar"
   s = "abccbefggfe", return "a"
 * 
 */

function removeAdjacentDuplicates(string='') {
  if(!string || typeof string !== 'string') {
    return '';
  }

  let charArray = string.split('');
  let previousChar = '';

  for(let i=0; i<charArray.length; i++) {
    const char = charArray[i];

    if(char === previousChar) {
      // Remove 2 elements starting from previous index (i.e, removes current and previous adjacent elements)
      charArray.splice(i-1, 2);
      i=-1;
      previousChar = '';
      continue;
    }

    previousChar = char;
  }

  return charArray.join('');
}

function removeAdjacentDuplicatesStack(string='') {
  if(!string || typeof string !== 'string') {
    return '';
  }

  let stack = [];

  for(let i=0; i<string.length; i++) {
    const char = string[i];

    if(stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}

console.log(removeAdjacentDuplicates('abccba') === '')
console.log(removeAdjacentDuplicates('foobar') === 'fbar')
console.log(removeAdjacentDuplicates('abccbefggfe') === 'a')
console.log(removeAdjacentDuplicates('azxxzy') === 'ay')
