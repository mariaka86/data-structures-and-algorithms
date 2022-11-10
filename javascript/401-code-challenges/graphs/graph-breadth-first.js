

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
