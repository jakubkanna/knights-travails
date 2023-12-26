function generatePossibleMoves(vertex) {
  const [x, y] = vertex;

  //possible knight moves offsets
  const offsets = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  //list of moves for the vertex
  const moves = [];

  for (const offset of offsets) {
    const newX = offset[0] + x;
    const newY = offset[1] + y;
    if (onBoard(newX, newY)) moves.push([newX, newY]); //check if is on the board
  }

  return moves;
}

const onBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

function knightTravails(start, end) {
  if (!onBoard(start) && onBoard(end))
    return "Start or end vertex is not on the board.";

  const queue = [start];
  const visited = new Set(); //remove duplicates

  while (queue.length > 0) {
    // dequeue
    const current = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return `You made it in ... moves!  Here's your path: ...`;
    }

    visited.add(current);

    // enqueue
    const possibleMoves = generatePossibleMoves(current);
    for (const move of possibleMoves) {
      if (!visited.has(move)) {
        queue.push(move);
      }
    }
  }
}

console.log(knightTravails([0, 0], [3, 3]));
