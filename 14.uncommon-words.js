/**
 * 
 * Given two strings representing sentences, return the words that are not common to both strings (i.e. the words that only appear in one of the sentences).
 * You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters. 
 * 
 * sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
   sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
   sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
 * 
 */

// T - O(m+n)
// S - O(m+n)
function uncommonWords(sentence1='', sentence2='') {
  const result = [];

  const sentence1Words = new Set(sentence1.split(' '));
  const sentence2Words = new Set(sentence2.split(' '));

  for(let word of sentence1Words) {
    if(!sentence2Words.has(word)) {
      result.push(word);
    }
  }

  for(let word of sentence2Words) {
    if(!sentence1Words.has(word)) {
      result.push(word);
    }
  }

  return result;
}

const test1 = uncommonWords("the quick", "brown fox")
console.log(test1.length === 4);
console.log(test1.includes('the'));
console.log(test1.includes('quick'));
console.log(test1.includes('brown'));
console.log(test1.includes('fox'));

const test2 = uncommonWords("the tortoise beat the haire", "the tortoise lost to the haire")
console.log(test2.length === 3);
console.log(test2.includes('beat'));
console.log(test2.includes('to'));
console.log(test2.includes('lost'));

const test3 = uncommonWords("copper coffee pot", "hot coffee pot")
console.log(test3.length === 2);
console.log(test3.includes('copper'));
console.log(test3.includes('hot'));