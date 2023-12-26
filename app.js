// Function to generate possible moves for a given vertex [x, y]
function generatePossibleMoves(vertex) {
  const [x, y] = vertex;

  // Possible knight moves offsets
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

  // List of moves
  const moves = [];

  // Process for the vertex x, y
  for (const offset of offsets) {
    const newX = offset[0] + x;
    const newY = offset[1] + y;
    if (onBoard(newX, newY)) moves.push([newX, newY]); // Check if it is on the board
  }

  return moves;
}

// Check if x, y is inside an 8x8 board
const onBoard = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

// Breadth-First Search
function knightTravails(start, end) {
  // Check if start and end are on the board
  if (!onBoard(start) && onBoard(end)) return "No valid path found.";

  const queue = [[start]];
  const visited = new Set(); // Use Set to remove duplicates

  while (queue.length > 0) {
    // Dequeue
    const currentPath = queue.shift(); // Remove and save the first element of the queue
    const current = currentPath[currentPath.length - 1]; // The last element of currentPath

    // If the end has been found
    if (current[0] === end[0] && current[1] === end[1]) {
      // Render positions [x, y] and join them with ->
      return `You made it in ${
        currentPath.length - 1
      } moves! Here's your path: ${currentPath
        .map((vertex) => `[${vertex.join(", ")}]`)
        .join(" -> ")}`;
    }

    visited.add(current);

    // Enqueue
    const possibleMoves = generatePossibleMoves(current);
    // For each possibleMove of the current vertex, create a new path
    for (const move of possibleMoves) {
      if (!visited.has(move)) {
        const newPath = [...currentPath, move]; //for every move add it's path
        queue.push(newPath);
      }
    }
  }

  return "No valid path found.";
}

console.log(knightTravails([0, 0], [3, 3]));
