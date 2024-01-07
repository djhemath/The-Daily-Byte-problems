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

const test1ListNode1 = new ListNode(1);
const test1ListNode2 = new ListNode(2);
const test1ListNode3 = new ListNode(3);

test1ListNode1.next = test1ListNode2;
test1ListNode2.next = test1ListNode3;
test1ListNode3.next = null;

const test1List = test1ListNode1;

console.log(startOfCycle(test1List) === null);


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

console.log(startOfCycle(test2List) === test2ListNode2);


const test3ListNode1 = new ListNode(1);
const test3ListNode2 = new ListNode(9);
const test3ListNode3 = new ListNode(3);
const test3ListNode4 = new ListNode(7);

test3ListNode1.next = test3ListNode2;
test3ListNode2.next = test3ListNode3;
test3ListNode3.next = test3ListNode4;
test3ListNode4.next = test3ListNode4;

const test3List = test3ListNode1;

console.log(startOfCycle(test3List) === test3ListNode4);
