/**
 * 
 * 
 * Given two integer arrays, return their intersection.
   Note: the intersection is the set of elements that are common to both arrays. 
 * 
 *
 * nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
   nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
   nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
 * 
 */

// T - O(m+n)
// S - O(m+n)
function intersectionOfNumbers(nums1=[], nums2=[]) {
  const nums1Map = new Map();
  const nums2Map = new Map();
  const result = [];

  for(let i=0; i<nums1.length; i++) {
    nums1Map.set(nums1[i], true);
  }

  for(let i=0; i<nums2.length; i++) {
    const num = nums2[i];

    if(nums1Map.get(num) && (!nums2Map.get(num))) {
      nums2Map.set(num, true);
      result.push(num);
    }
  }

  return result;
}

const test1 = intersectionOfNumbers([2, 4, 4, 2], [2, 4]);
console.log(test1.length === 2);
console.log(test1[0] === 2);
console.log(test1[1] === 4);

const test2 = intersectionOfNumbers([1, 2, 3, 3], [3, 3]);
console.log(test2.length === 1);
console.log(test2[0] === 3);

const test3 = intersectionOfNumbers([2, 4, 6, 8], [1, 3, 5, 7]);
console.log(test3.length === 0);