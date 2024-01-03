
function ListNode(val, next) {
  this.val = val || 0;
  this.next = next || null;
}

function testLinkedListResults(list, expected=[]) {
  let currentNode = list;
  let i=0;

  if(expected.length === 0) {
    if(list === null) {
      return true;
    } else {
      return false;
    }
  } else {
    if(currentNode === null) {
      return false;
    }
  }


  while(currentNode) {
    if(expected[i] !== currentNode.val) {
      return false;
    }

    currentNode = currentNode.next;
    i++;
  }

  return true;
}

module.exports = { ListNode, testLinkedListResults };