class Vertex {
  constructor(data) {
    this.data = data;
    this.adjacents = this.possibleMoves();
  }

  static knightOffsets = [
    [1, 2],
    [1, -2],
    [2, 1],
    [2, -1],
    [-1, 2],
    [-1, -2],
    [-2, 1],
    [-2, -1],
  ];

  possibleMoves() {
    //return list of offseted Vertexes
    //each Vertex should have it's own list of offseted Vertexes
    //recursively update the list, until x or y is bigger than 8 (new position is not within the chessboard)
  }
}

function knightMoves(start, finish) {
  const vertex = new Vertex(start);
  console.log(vertex);
}

knightMoves([3, 3], [0, 0]);
