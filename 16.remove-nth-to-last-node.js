/**
 * 
 * 
 * Given a linked list and a value n, remove the nth to last node and return the resulting list.
 * 
 * 1->2->3->null, n = 1, return 1->2->null
   1->2->3->null, n = 2, return 1->3->null
   1->2->3->null, n = 3, return 2->3->null
 * 
 */

const { ListNode, testLinkedListResults } = require('./common/linked-list');

// T -> O(n)
// S -> O(1)
function removeNthToLastNode(head, n) {
  let size = 0;

  let currentHead = head;
  while(currentHead !== null) {
    size += 1;
    currentHead = currentHead.next;
  }

  const indexToDelete = size - n;

  if(indexToDelete === 0) {
    head = head.next;
    return head;
  }

  let counter = 0;
  let currentNode = head;
  let previousNode = head;

  while(currentNode && counter <= indexToDelete) {
    if(counter === indexToDelete) {

      previousNode.next = currentNode.next;
      break;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
    counter += 1;
  }

  return head;
}

function removeNthToLastNodeTwoPointer(head, n) {
  let leftPointer = head;
  let rightPointer = head;

  for(let i=0; i<n; i++) {
    rightPointer = rightPointer.next;
  }

  if(!rightPointer) return head.next;

  while(rightPointer.next) {
    rightPointer = rightPointer.next;
    leftPointer = leftPointer.next;
  }

  leftPointer.next = leftPointer.next.next;

  return head;
}

const test1ListNode3 = new ListNode(3);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

// const test1Result = removeNthToLastNode(test1List, 1);
const test1ResultExpected = [1, 2];

const test1Result2 = removeNthToLastNodeTwoPointer(test1List, 1);

// console.log(testLinkedListResults(test1Result, test1ResultExpected));
console.log(testLinkedListResults(test1Result2, test1ResultExpected));


const test2ListNode3 = new ListNode(3);
const test2ListNode2 = new ListNode(2, test2ListNode3);
const test2ListNode1 = new ListNode(1, test2ListNode2);
const test2List = test2ListNode1;

// const test2Result = removeNthToLastNode(test2List, 2);
const test2ResultExpected = [1, 3];

const test2Result2 = removeNthToLastNodeTwoPointer(test2List, 2);

// console.log(testLinkedListResults(test2Result, test2ResultExpected));
console.log(testLinkedListResults(test2Result2, test2ResultExpected));


const test3ListNode3 = new ListNode(3);
const test3ListNode2 = new ListNode(2, test3ListNode3);
const test3ListNode1 = new ListNode(1, test3ListNode2);
const test3List = test3ListNode1;

// const test3Result = removeNthToLastNode(test3List, 3);
const test3ResultExpected = [2, 3];

const test3Result2 = removeNthToLastNodeTwoPointer(test3List, 3);

// console.log(testLinkedListResults(test3Result, test3ResultExpected));
console.log(testLinkedListResults(test3Result2, test3ResultExpected));


const test4ListNode5 = new ListNode(5);
const test4ListNode4 = new ListNode(4, test4ListNode5);
const test4ListNode3 = new ListNode(3, test4ListNode4);
const test4ListNode2 = new ListNode(2, test4ListNode3);
const test4ListNode1 = new ListNode(1, test4ListNode2);
const test4List = test4ListNode1;

// const test4Result = removeNthToLastNode(test4List, 2);
const test4ResultExpected = [1, 2, 3, 5];

const test4Result2 = removeNthToLastNodeTwoPointer(test4List, 2);

// console.log(testLinkedListResults(test4Result, test4ResultExpected));
console.log(testLinkedListResults(test4Result2, test4ResultExpected));


const test5ListNode1 = new ListNode(1);
const test5List = test5ListNode1;

// const test5Result = removeNthToLastNode(test5List, 1);
const test5ResultExpected = [];

const test5Result2 = removeNthToLastNodeTwoPointer(test5List, 1);

// console.log(testLinkedListResults(test5Result, test5ResultExpected));
console.log(testLinkedListResults(test5Result2, test5ResultExpected));


const test6ListNode2 = new ListNode(2);
const test6ListNode1 = new ListNode(1, test6ListNode2);
const test6List = test6ListNode1;

// const test6Result = removeNthToLastNode(test6List, 1);
const test6ResultExpected = [1];

const test6Result2 = removeNthToLastNodeTwoPointer(test6List, 1);

// console.log(testLinkedListResults(test6Result, test6ResultExpected));
console.log(testLinkedListResults(test6Result2, test6ResultExpected));