/**
 * 
 * Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list. 
 * 
 * 1->2->3->null, value = 3, return 1->2->null
   8->1->1->4->12->null, value = 1, return 8->4->12->null
   7->12->2->9->null, value = 7, return 12->2->9->null
 * 
 */

const { ListNode, testLinkedListResults } = require('./common/linked-list');

// T -> O(n)
// S -> O(n)
function removeAllNodesWithValue(head, value) {
  let currentNode = head;
  let previousNode = null;

  while(currentNode) {
    if(currentNode.val === value) {

      if(!previousNode) {
        head = currentNode.next;
        previousNode = currentNode.next;
      } else {
        previousNode.next = currentNode.next;
      }

      currentNode = currentNode.next;

      continue;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if(head && head.val === value) {
    head = head.next;
  }

  return head;
}

// T -> O(n)
// S -> O(n)
function removeAllNodesWithValue_DummyNodeSolution(head, value) {
  const dummy = new ListNode(null, head);

  let currentNode = head;
  let previousNode = dummy;

  while(currentNode) {
    if(currentNode.val === value) {
      previousNode.next = currentNode.next;
      currentNode = currentNode.next;

      continue;
    }

    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  return dummy.next;
}

const test1ListNode3 = new ListNode(3);
const test1ListNode2 = new ListNode(2, test1ListNode3);
const test1ListNode1 = new ListNode(1, test1ListNode2);
const test1List = test1ListNode1;

const test1ResultExpected = [1, 2];

// const test1Result1 = removeAllNodesWithValue(test1List, 3);
const test1Result2 = removeAllNodesWithValue_DummyNodeSolution(test1List, 3);

// console.log(testLinkedListResults(test1Result1, test1ResultExpected));
console.log(testLinkedListResults(test1Result2, test1ResultExpected));


const test2ListNode5 = new ListNode(12);
const test2ListNode4 = new ListNode(4, test2ListNode5);
const test2ListNode3 = new ListNode(1, test2ListNode4);
const test2ListNode2 = new ListNode(1, test2ListNode3);
const test2ListNode1 = new ListNode(8, test2ListNode2);
const test2List = test2ListNode1;

const test2ResultExpected = [8, 4, 12];

// const test2Result = removeAllNodesWithValue(test2List, 1);
const test2Result2 = removeAllNodesWithValue_DummyNodeSolution(test2List, 1);

// console.log(testLinkedListResults(test2Result, test2ResultExpected));
console.log(testLinkedListResults(test2Result2, test2ResultExpected));


const test3ListNode4 = new ListNode(9);
const test3ListNode3 = new ListNode(2, test3ListNode4);
const test3ListNode2 = new ListNode(12, test3ListNode3);
const test3ListNode1 = new ListNode(7, test3ListNode2);
const test3List = test3ListNode1;

const test3ResultExpected = [12, 2, 9];

// const test3Result = removeAllNodesWithValue(test3List, 7);
const test3Result2 = removeAllNodesWithValue_DummyNodeSolution(test3List, 7);

// console.log(testLinkedListResults(test3Result, test3ResultExpected));
console.log(testLinkedListResults(test3Result2, test3ResultExpected));