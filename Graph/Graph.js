// Graph => Some node and connection between them
// vertex => node
// edgde => connection between nodes
// weighted/unweighed graph => has value to the edge / no value to the edge
// directed / undirected graph => one way connection / two way connection

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

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let myGraph = new Graph();
myGraph.addVertex("Chennai");
myGraph.addVertex("Madhuri");
myGraph.addVertex("Ooty");
myGraph.addVertex("Coimbatore");
myGraph.addEdge("Chennai", "Madhuri");
myGraph.addEdge("Ooty", "Madhuri");
myGraph.addEdge("Ooty", "Coimbatore");
console.log(myGraph);
