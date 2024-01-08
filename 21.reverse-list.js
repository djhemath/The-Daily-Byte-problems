/**
 * Given a linked list, containing unique values, reverse it, and return the result. 
 * 
 * 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
   7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
   1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null
 */

const { ListNode, testLinkedListResults } = require('./common/linked-list');

// T -> O(n)
// S -> O(1)
function reverseList(head) {
  if(!head) {
    return null;
  }

  let previousNode = null;
  let currentNode = head;
  let nextNode = head.next;

  while(currentNode !== null) {
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;

    if(nextNode && nextNode.next) {
      nextNode = nextNode.next;
    } else {
      nextNode = null;
    }
  }

  return previousNode;
}

const test1ListNode3 = new ListNode(3);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1ResultExpected = [3, 2, 1];

const test1Result1 = reverseList(test1List);
console.log(testLinkedListResults(test1Result1, test1ResultExpected));


const test2ListNode4 = new ListNode(2);
const test2ListNode3 = new ListNode(9, test2ListNode4);
const test2ListNode2 = new ListNode(15, test2ListNode3);
const test2ListNode1 = new ListNode(7, test2ListNode2);
const test2List = test2ListNode1;

const test2ResultExpected = [2, 9, 15, 7];

const test2Result1 = reverseList(test2List);
console.log(testLinkedListResults(test2Result1, test2ResultExpected));


const test3ListNode1 = new ListNode(1);
const test3List = test3ListNode1;

const test3ResultExpected = [1];

const test3Result1 = reverseList(test3List);
console.log(testLinkedListResults(test3Result1, test3ResultExpected));