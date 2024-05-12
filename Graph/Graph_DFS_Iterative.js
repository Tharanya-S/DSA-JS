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

  depthFirstSearchIterative(start) {
    let result = [];
    let visited = {};
    let stack = [start]; //push start into stack initally
    visited[start] = true; //make start as visited
    let currentVertex;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
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
console.log(myGraph.depthFirstSearchIterative("A")); //[ 'A', 'C', 'E', 'F', 'D', 'B' ]

//             A
//            /  \
//           B    C
//           |    |
//           D----E
//            \  /
//              F
