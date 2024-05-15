class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      // this.adjacencyList[currentVertex].slice().reverse().forEach((neighbor) => {//[ 'A', 'C', 'B', 'E', 'D', 'F' ]
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const myGraph = new Graph();
myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("D", "B");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");
console.log(myGraph.breadthFirstSearch("A")); //[ 'A', 'B', 'C', 'D', 'E', 'F' ]

//             A
//            /  \
//           B    C
//           |    |
//           D----E
//            \  /
//              F
