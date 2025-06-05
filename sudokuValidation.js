const dummy = [
  "1 2 3 4 5 6 7 8 9",
  "4 5 6 7 8 9 1 2 3",
  "7 8 9 1 2 3 4 5 6",
  "9 1 2 3 4 5 6 7 8",
  "3 4 5 6 7 8 9 1 2",
  "6 7 8 9 1 2 3 4 5",
  "8 9 1 2 3 4 5 6 7",
  "2 3 4 5 6 7 8 9 1",
  "5 6 7 8 9 1 2 3 4",
];
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
let board = [...Array(9)].map((row) => Array(9).fill(0));
for (let i = 0; i < 9; i++) {
  var inputs = dummy[i].split(" ");

  for (let j = 0; j < 9; j++) {
    const n = parseInt(inputs[j]);
    board[i][j] = n;
  }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

var isValid = true;
board.forEach((row, i) => {
  row.forEach((box, j) => {
    checkValid(board, i, j, box);
  });
});

function checkValid(board, row, col, num) {
  //check row
  for (let x = 0; x < 9; x++) {
    //  console.log(board[row][x]," test");
    if (board[row][x] == num && x != col) {
      isValid = false;
      return;
    }
  }
  //check col
  for (let x = 0; x < 9; x++) {
    if (board[x][col] == num && x != row) {
      isValid = false;
      return;
    }
  }

  //check each 3x3 box
  let startRow = row - (row % 3);
  let startCol = col - (col % 3);
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (
        board[x + startRow][y + startCol] == num &&
        x + startRow != row &&
        y + startCol != col
      ) {
        isValid = false;
        return;
      }
    }
  }
}

console.log(isValid);
