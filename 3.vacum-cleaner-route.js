/**
 * 
 * Vacuum cleaner route

  "LR", return true
  "URURD", return false
  "RUULLDRD", return true
 * 
 */

// O(n)
function doesVacuumCleanerComesToOriginalPosition(path) {
  let x = 0;
  let y = 0;

  for(let i=0; i<path.length; i++) {
    const direction = path[i];

    switch(direction) {
      case 'L':
        x -= 1;
        break;
      case 'R':
        x += 1;
        break;
      case 'D':
        y -= 1;
        break;
      case 'U':
        y += 1;
        break;
    }
  }

  return x === 0 && y === 0;
}

console.log(doesVacuumCleanerComesToOriginalPosition("") === true)
console.log(doesVacuumCleanerComesToOriginalPosition("LR") === true)
console.log(doesVacuumCleanerComesToOriginalPosition("URURD") === false)
console.log(doesVacuumCleanerComesToOriginalPosition("RUULLDRD") === true)