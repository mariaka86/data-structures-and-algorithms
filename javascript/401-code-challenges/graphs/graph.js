'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.adjacencyList = new Map();
  }

  addNode(value){
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0){
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes(){
    return this.adjacencyList.keys; // ? maybe...
  }

  breadthFirst(root, callback){
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while(queue.length){
      current = queue.pop();

      if(callback) callback(current.value);

      // grab neighbors if they exist
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors){
        if(!visited.has(edge.vertex)){
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }

  // Breadth first uses queue while Depth first uses stacks
  depthFirst(root, cb){
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;

    while (stack.length) {
      current = stack.pop();
      if (cb) cb(current.value);

      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }

    return visited;
  }
}

const graph = new Graph();

const A = graph.addNode('A');
const B = graph.addNode('B');
const C = graph.addNode('C');
const D = graph.addNode('D');
const E = graph.addNode('E');
const F = graph.addNode('F');
const G = graph.addNode('G');
const H = graph.addNode('H');

graph.addEdge(A, B);
graph.addEdge(A, D);
graph.addEdge(A, C);
graph.addEdge(B, G);
graph.addEdge(D, F);
graph.addEdge(D, H);
graph.addEdge(F, H);
graph.addEdge(C, H);
graph.addEdge(F, E);

graph.breadthFirst(A, console.log);
console.log('_________________');
graph.depthFirst(A, console.log);
