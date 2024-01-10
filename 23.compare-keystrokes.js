/**
 * 
 * Given two strings s and t, which represents a sequence of keystrokes, where # denotes a backspace, return whether or not the sequences produce the same result.
 * 
 * s = "ABC#", t = "CD##AB", return true
   s = "como#pur#ter", t = "computer", return true
   s = "cof#dim#ng", t = "code", return false
 * 
 */

// T -> O(m+n)
// S -> O(m+n)
function compareKeystrokes(s, t) {
  if(typeof s !== 'string') {
    return false;
  }

  if(typeof t !== 'string') {
    return false;
  }

  let maxLength = s.length > t.length ? s.length: t.length;

  let string1 = '';
  let string2 = '';

  for(let i=0; i<maxLength; i++) {
    sChar = s[i];
    tChar = t[i];

    if(sChar) {
      if(sChar !== '#') {
        string1 += sChar;
      } else {
        string1 = string1.substring(0, string1.length - 1);
      }
    }

    if(tChar) {
      if(tChar !== '#') {
        string2 += tChar;
      } else {
        string2 = string2.substring(0, string2.length - 1);
      }
    }
  }

  return string1 === string2;
}

// ? NOTE: Both time and space complexities are equal, but removing the last character (pop()) in stack is O(1) whereas in string it's O(n)

// T -> O(m+n)
// S -> O(m+n)
function compareKeystrokesWithStack(s, t) {
  if(typeof s !== 'string') {
    return false;
  }

  if(typeof t !== 'string') {
    return false;
  }

  let maxLength = s.length > t.length ? s.length: t.length;

  let stack1 = [];
  let stack2 = [];

  for(let i=0; i<maxLength; i++) {
    sChar = s[i];
    tChar = t[i];

    if(sChar) {
      if(sChar !== '#') {
        stack1.push(sChar);
      } else {
        stack1.pop(sChar);
      }
    }

    if(tChar) {
      if(tChar !== '#') {
        stack2.push(tChar);
      } else {
        stack2.pop(tChar);
      }
    }
  }

  if(stack1.length !== stack2.length) {
    return false;
  } else {
    for(let i=0; i<stack1.length; i++) {
      if(stack1[i] !== stack2[i]) {
        return false;
      }
    }
  }

  return true;
}

console.log(compareKeystrokes("ABC#", "CD##AB") === true);
console.log(compareKeystrokes("como#pur#ter", "computer") === true);
console.log(compareKeystrokes("cof#dim#ng", "code") === false);
console.log(compareKeystrokes("#", "") === true);
console.log(compareKeystrokes("#", "#") === true);
console.log(compareKeystrokes("#", "##") === true);

console.log(compareKeystrokesWithStack("ABC#", "CD##AB") === true);
console.log(compareKeystrokesWithStack("como#pur#ter", "computer") === true);
console.log(compareKeystrokesWithStack("cof#dim#ng", "code") === false);
console.log(compareKeystrokesWithStack("#", "") === true);
console.log(compareKeystrokesWithStack("#", "#") === true);
console.log(compareKeystrokesWithStack("#", "##") === true);