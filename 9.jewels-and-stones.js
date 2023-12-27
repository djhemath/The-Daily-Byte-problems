/**
 * 
 * 
 *  Given a string representing your stones and another string representing a list of jewels,
 *  return the number of stones that you have that are also jewels. 
 * 
  jewels = "abc", stones = "ac", return 2
  jewels = "Af", stones = "AaaddfFf", return 3
  jewels = "AYOPD", stones = "ayopd", return 0
 * 
 */

// O(a*b)
function jewelsAndStonesNaiveSolution(jewels, stones) {
  if(!jewels || !stones) {
    return 0;
  }

  let sum = 0;

  for(let i=0; i<jewels.length; i++) {
    const jewel = jewels[i];

    for(let j=0; j<stones.length; j++) {
      const stone = stones[j];

      if(stone === jewel) {
        sum += 1;
      }
    }
  }

  return sum;
}

console.log(jewelsAndStonesNaiveSolution("abc", "ac") === 2);
console.log(jewelsAndStonesNaiveSolution("Af", "AaaddfFf") === 3);
console.log(jewelsAndStonesNaiveSolution("AYOPD", "ayopd") === 0);
console.log(jewelsAndStonesNaiveSolution("aA", "aAAbbbb") === 3);
console.log(jewelsAndStonesNaiveSolution("z", "ZZ") === 0);

// O(m+n)
function jewelsAndStonesBetterSolution(jewels, stones) {
  const jewelsMap = new Map();
  let sum = 0;

  for(let i=0; i<jewels.length; i++) {
    const jewel = jewels[i];
    jewelsMap[jewel] = true;
  }

  for(let i=0; i<stones.length; i++) {
    const stone = stones[i];

    if(jewelsMap[stone]) {
      sum += 1;
    }
  }

  return sum;
}

console.log(jewelsAndStonesBetterSolution("abc", "ac") === 2);
console.log(jewelsAndStonesBetterSolution("Af", "AaaddfFf") === 3);
console.log(jewelsAndStonesBetterSolution("AYOPD", "ayopd") === 0);
console.log(jewelsAndStonesBetterSolution("aA", "aAAbbbb") === 3);
console.log(jewelsAndStonesBetterSolution("z", "ZZ") === 0);