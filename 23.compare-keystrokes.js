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

console.log(compareKeystrokes("ABC#", "CD##AB") === true)
console.log(compareKeystrokes("como#pur#ter", "computer") === true)
console.log(compareKeystrokes("cof#dim#ng", "code") === false)
console.log(compareKeystrokes("#", "") === true)
console.log(compareKeystrokes("#", "#") === true)
console.log(compareKeystrokes("#", "##") === true)