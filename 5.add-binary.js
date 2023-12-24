/**
 * 
  "100" + "1", return "101"
  "11" + "1", return "100"
  "1" + "0", return  "1"
 *
 */


function bitAdd(bit1, bit2) {
  let addResult = '';
  let isCarry = false;

  if(bit1 === '0' && bit2 === '0') {
    addResult = '0';
  } else if(bit1 === '0' && bit2 === '1') {
    addResult = '1';
  } else if(bit1 === '1' && bit2 === '0') {
    addResult = '1';
  } else if(bit1 === '1' && bit2 === '1') {
    addResult = '0';
    isCarry = true;
  }

  return [addResult, isCarry];
}

function addBinary(binary1, binary2) {
  let maxLength = binary1.length;

  if(binary2.length > maxLength) {
    maxLength = binary2.length;
  }

  binary1 = binary1.padStart(maxLength, '0');
  binary2 = binary2.padStart(maxLength, '0');

  let result = '';
  let carry = '0';

  for(let i=maxLength-1; i>=0; i--) {
    let bit1 = binary1[i];
    let bit2 = binary2[i];

    let localCarry = '0';

    let [ addResult, isCarry ] = bitAdd(bit1, bit2);

    localCarry = isCarry;

    if(carry === '1') {
      const [ carryAddResult, isCarry2 ] = bitAdd(addResult, carry);
      addResult = carryAddResult;
      localCarry = localCarry ? localCarry : isCarry2;
    }

    carry = localCarry ? '1': '0';

    result = addResult + result;
  }

  if(carry === '1') {
    result = carry + result;
  }

  return result;
}

console.log(addBinary("100", "1") === "101")
console.log(addBinary("11", "1") === "100")
console.log(addBinary("1", "0") === "1")
console.log(addBinary("111", "111") === "1110")
console.log(addBinary("1010", "1011") === "10101")