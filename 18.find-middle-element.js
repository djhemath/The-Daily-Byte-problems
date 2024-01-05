/**
 * 
 * Given a non-empty linked list, return the middle node of the list. If the linked list contains an even number of elements, return the node closer to the end. 
 * 
 * 1->2->3->null, return 2
   1->2->3->4->null, return 3
   1->null, return 1
 * 
 */

const { ListNode, testLinkedListResults } = require('./common/linked-list');

// T - O(n)
// S - O(1)
function findMiddleElement(head) {
  let size = 0;

  let currentNode = head;

  while(currentNode) {
    size += 1;
    currentNode = currentNode.next;
  }

  let middleIndex = Math.ceil(size / 2);

  if(size % 2 !== 0) {
    middleIndex -= 1;
  }

  let counter = 0;

  currentNode = head;
  while(counter < middleIndex) {
    currentNode = currentNode.next;
    counter += 1;
  }

  return currentNode;
}

const test1ListNode3 = new ListNode(3);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1Result1 = findMiddleElement(test1List, 3);

console.log(test1Result1.val === 2);


const test2ListNode4 = new ListNode(4);
const test2ListNode3 = new ListNode(3, test2ListNode4);
const test2ListNode2 = new ListNode(2, test2ListNode3);
const test2ListNode1 = new ListNode(1, test2ListNode2);
const test2List = test2ListNode1;

const test2Result1 = findMiddleElement(test2List, 3);

console.log(test2Result1.val === 3);


const test3ListNode1 = new ListNode(1);
const test3List = test3ListNode1;

const test3Result1 = findMiddleElement(test3List, 3);

console.log(test3Result1.val === 1);


const test4ListNode5 = new ListNode(5);
const test4ListNode4 = new ListNode(4, test4ListNode5);
const test4ListNode3 = new ListNode(3, test4ListNode4);
const test4ListNode2 = new ListNode(2, test4ListNode3);
const test4ListNode1 = new ListNode(1, test4ListNode2);
const test4List = test4ListNode1;

const test4Result1 = findMiddleElement(test4List, 3);

console.log(test4Result1.val === 3);


const test5ListNode6 = new ListNode(6);
const test5ListNode5 = new ListNode(5, test5ListNode6);
const test5ListNode4 = new ListNode(4, test5ListNode5);
const test5ListNode3 = new ListNode(3, test5ListNode4);
const test5ListNode2 = new ListNode(2, test5ListNode3);
const test5ListNode1 = new ListNode(1, test5ListNode2);
const test5List = test5ListNode1;

const test5Result1 = findMiddleElement(test5List, 3);

console.log(test5Result1.val === 4);