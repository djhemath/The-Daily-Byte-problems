/**
 * 
 * Given a linked list, containing unique numbers, return whether or not it has a cycle.
   Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)
 *
 * 
 *
 * 1->2->3->1 -> true (3 points back to 1)
   1->2->3 -> false
   1->1 true (1 points to itself)
 * 
 */

const { ListNode } = require('./common/linked-list');

// ? NOTE: This solution works only if the numbers are unique in the list.
// ? It won't check whether there is an actual cycle or not.
// ? It only checks if the number is repeated or not. So there should be a better solution for this
function containsCycle(head) {
  const visitedNotes = new Map();

  let currentNode = head;

  while(currentNode) {
    const value = currentNode.val;
    const existInMap = visitedNotes.get(value) === true;

    if(existInMap) {
      return true;
    }

    visitedNotes.set(value, true)
    currentNode = currentNode.next;
  }

  return false;
}

// Also known as Floyd's cycle detection algorithm
function containsCycleBestSolution(head) {

  let fast = head;
  let slow = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    // Yes, we can compare two objects directly here.
    // And we actually have to compare, because a cycle means if the same object is linked.
    // Same object means, memory address will be the same, so equality operator will work.
    if(fast === slow) return true;
  }

  return false;
}

const test1ListNode1 = new ListNode(1);
const test1ListNode2 = new ListNode(2);
const test1ListNode3 = new ListNode(3);

test1ListNode1.next = test1ListNode2;
test1ListNode2.next = test1ListNode3;
test1ListNode3.next = test1ListNode1;

const test1List = test1ListNode1;

// console.log(containsCycle(test1List) === true);
console.log(containsCycleBestSolution(test1List) === true);


const test2ListNode1 = new ListNode(1);
const test2ListNode2 = new ListNode(2);
const test2ListNode3 = new ListNode(3);

test2ListNode1.next = test2ListNode2;
test2ListNode2.next = test2ListNode3;
test2ListNode3.next = null;

const test2List = test2ListNode1;

// console.log(containsCycle(test2List) === false);
console.log(containsCycleBestSolution(test2List) === false);


const test3ListNode1 = new ListNode(1);
test3ListNode1.next = test3ListNode1;

const test3List = test3ListNode1;

// console.log(containsCycle(test3List) === true);
console.log(containsCycleBestSolution(test3List) === true);


const test4ListNode1 = new ListNode(1);
const test4ListNode2 = new ListNode(2);
const test4ListNode3 = new ListNode(3);
const test4ListNode4 = new ListNode(1);

test4ListNode1.next = test4ListNode2;
test4ListNode2.next = test4ListNode3;
test4ListNode3.next = test4ListNode4;
test4ListNode4.next = null;

const test4List = test4ListNode1;

// console.log(containsCycle(test4List) === false);
console.log(containsCycleBestSolution(test4List) === false);
