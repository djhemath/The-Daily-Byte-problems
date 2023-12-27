/**
 * 
 * Given an array of integers, return whether or not two numbers sum to a given target, k.
  Note: you may not sum a number with itself.

  [1, 3, 8, 2], k = 10, return true (8 + 2)
  [3, 9, 13, 7], k = 8, return false
  [4, 2, 6, 5, 2], k = 4, return true (2 + 2)
 * 
 */


function twoSums(array=[], k) {
  if((!k && k !== 0) || typeof k !== 'number') {
    return false;
  }

  const set = new Set();

  for(let i=0; i<array.length; i++) {
    const number = array[i];
    const expectedNumber = k - number;

    if(set.has(expectedNumber)) {
      return true;
    }

    set.add(number);
  }

  return false;
}


console.log(twoSums([1, 3, 8, 2], 10) == true)
console.log(twoSums([3, 9, 13, 7], 8) == false)
console.log(twoSums([4, 2, 6, 5, 2], 4) == true)
console.log(twoSums([1, 9, 13, 20, 47], 10) == true)
console.log(twoSums([3, 2, 4, 1, 9], 12) == true)
console.log(twoSums([], 10) == false)
console.log(twoSums([3, -2, 4, -1, 9], -3) == true)
console.log(twoSums([3, -2, 4, 2, 9], 0) == true)