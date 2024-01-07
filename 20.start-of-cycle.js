/**
 * 
 *  Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts.
 *  If the list does not contain a cycle, return null
 * 
 * 1->2->3, return null
   1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
   1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
 * 
 */

const { ListNode } = require('./common/linked-list');

// T - O(n)
// S - O(n)
function startOfCycle(head) {
  const visitedNodes = new Map();

  let currentNode = head;

  while(currentNode) {
    const visitedNode = visitedNodes.get(currentNode);

    if(visitedNode === true) {
      return currentNode;
    } else {
      visitedNodes.set(currentNode, true);
    }

    currentNode = currentNode.next;
  }

  return null
}

// T - O(n)
// S - O(1)
function startOfCycleBestSolution(head) {
  // 1. Find the meeting point using Floyd's cycle detection algorithm

  let slow = head;
  let fast = head;

  while(fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if(slow === fast) break;
  }

  // 2. If there is no meeting point, then the list has no cycles
  if(slow !== fast) return null;

  // 3. Keep fast at meeting point and reset slow to head
  // Move slow and fast pointers one position a time until they both meet
  slow = head;

  while(slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // 4. This meeting point will now be the start of cycle
  return fast;
}

const test1ListNode1 = new ListNode(1);
const test1ListNode2 = new ListNode(2);
const test1ListNode3 = new ListNode(3);

test1ListNode1.next = test1ListNode2;
test1ListNode2.next = test1ListNode3;
test1ListNode3.next = null;

const test1List = test1ListNode1;

// console.log(startOfCycle(test1List) === null);
console.log(startOfCycleBestSolution(test1List) === null);


const test2ListNode1 = new ListNode(1);
const test2ListNode2 = new ListNode(2);
const test2ListNode3 = new ListNode(3);
const test2ListNode4 = new ListNode(4);
const test2ListNode5 = new ListNode(5);

test2ListNode1.next = test2ListNode2;
test2ListNode2.next = test2ListNode3;
test2ListNode3.next = test2ListNode4;
test2ListNode4.next = test2ListNode5;
test2ListNode5.next = test2ListNode2;

const test2List = test2ListNode1;

// console.log(startOfCycle(test2List) === test2ListNode2);
console.log(startOfCycleBestSolution(test2List) === test2ListNode2);


const test3ListNode1 = new ListNode(1);
const test3ListNode2 = new ListNode(9);
const test3ListNode3 = new ListNode(3);
const test3ListNode4 = new ListNode(7);

test3ListNode1.next = test3ListNode2;
test3ListNode2.next = test3ListNode3;
test3ListNode3.next = test3ListNode4;
test3ListNode4.next = test3ListNode4;

const test3List = test3ListNode1;

// console.log(startOfCycle(test3List) === test3ListNode4);
console.log(startOfCycleBestSolution(test3List) === test3ListNode4);
