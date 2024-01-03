/**
 * 
 * Given two sorted linked lists, merge them together in ascending order and return a reference to the merged list
 * 
 * list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
   list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
   list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
 * 
 */

const { ListNode } = require('./common/linked-list');

function mergeLinkedLists(list1, list2) {
  let currentList1Node = list1;
  let currentList2Node = list2;

  if(!currentList1Node) {
    return list2;
  }

  if(!currentList2Node) {
    return list1;
  }

  let result = null;
  let resultTail = null;

  while(currentList1Node || currentList2Node) {
    let newNode = new ListNode();
    let value = null;

    if(!currentList1Node) {
      value = currentList2Node.val;
      currentList2Node = currentList2Node.next;
    } else if(!currentList2Node) {
      value = currentList1Node.val;
      currentList1Node = currentList1Node.next;
    } else if(currentList1Node.val <= currentList2Node.val) {
      value = currentList1Node.val;
      currentList1Node = currentList1Node.next;
    } else {
      value = currentList2Node.val;
      currentList2Node = currentList2Node.next;
    }

    newNode.val = value;

    if(result === null) {
      result = newNode;
    } else {
      resultTail.next = newNode;
    }

    resultTail = newNode;
  }

  return result;
}

const test1List1Node3 = new ListNode(3);
const test1List1Node2 = new ListNode(2, test1List1Node3);
const test1List1Node1 = new ListNode(1, test1List1Node2);
const test1List1 = test1List1Node1;

const test1List2Node3 = new ListNode(6);
const test1List2Node2 = new ListNode(5, test1List2Node3);
const test1List2Node1 = new ListNode(4, test1List2Node2);
const test1List2 = test1List2Node1;

const test1Result = mergeLinkedLists(test1List1, test1List2);
const test1ResultExpected = [1, 2, 3, 4, 5, 6];

console.log(testResults(test1Result, test1ResultExpected));



const test2List1Node3 = new ListNode(5);
const test2List1Node2 = new ListNode(3, test2List1Node3);
const test2List1Node1 = new ListNode(1, test2List1Node2);
const test2List1 = test2List1Node1;

const test2List2Node3 = new ListNode(6);
const test2List2Node2 = new ListNode(4, test2List2Node3);
const test2List2Node1 = new ListNode(2, test2List2Node2);
const test2List2 = test2List2Node1;

const test2Result = mergeLinkedLists(test2List1, test2List2);
const test2ResultExpected = [1, 2, 3, 4, 5, 6];

console.log(testResults(test2Result, test2ResultExpected));



const test3List1Node3 = new ListNode(7);
const test3List1Node2 = new ListNode(4, test3List1Node3);
const test3List1Node1 = new ListNode(4, test3List1Node2);
const test3List1 = test3List1Node1;

const test3List2Node3 = new ListNode(6);
const test3List2Node2 = new ListNode(5, test3List2Node3);
const test3List2Node1 = new ListNode(1, test3List2Node2);
const test3List2 = test3List2Node1;

const test3Result = mergeLinkedLists(test3List1, test3List2);
const test3ResultExpected = [1, 4, 4, 5, 6, 7];

console.log(testResults(test3Result, test3ResultExpected));


const test4List1Node3 = new ListNode(7);
const test4List1Node2 = new ListNode(4, test4List1Node3);
const test4List1Node1 = new ListNode(4, test4List1Node2);
const test4List1 = test4List1Node1;

const test4List2Node2 = new ListNode(6);
const test4List2Node1 = new ListNode(5, test4List2Node2);
const test4List2 = test4List2Node1;

const test4Result = mergeLinkedLists(test4List1, test4List2);
const test4ResultExpected = [4, 4, 5, 6, 7];

console.log(testResults(test4Result, test4ResultExpected));


const test5List1Node3 = new ListNode(7);
const test5List1Node2 = new ListNode(4, test5List1Node3);
const test5List1Node1 = new ListNode(4, test5List1Node2);
const test5List1 = test5List1Node1;

const test5List2 = null;

const test5Result = mergeLinkedLists(test5List1, test5List2);
const test5ResultExpected = [4, 4, 7];

console.log(testResults(test5Result, test5ResultExpected));


const test6List1 = null;

const test6List2Node3 = new ListNode(6);
const test6List2Node2 = new ListNode(3, test6List2Node3);
const test6List2Node1 = new ListNode(1, test6List2Node2);
const test6List2 = test6List2Node1;

const test6Result = mergeLinkedLists(test6List1, test6List2);
const test6ResultExpected = [1, 3, 6];

console.log(testResults(test6Result, test6ResultExpected));



function testResults(list, expected=[]) {
  let currentNode = list;
  let i=0;

  while(currentNode) {
    if(expected[i] !== currentNode.val) {
      return false;
    }

    currentNode = currentNode.next;
    i++;
  }

  return true;
}