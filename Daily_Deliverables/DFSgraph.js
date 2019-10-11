'use strict';

class Graph {
  constructor() {
    this.AdjList = new Map();
    console.log('Di-graph');
  }

  addNode(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, []);
    } else {
      throw 'Already Exist!!!';
    }
  }

  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)){ 
        let arr = this.AdjList.get(vertex);
        if(!arr.includes(node)){
          arr.push(node);
        }else{
          throw `Can't add '${node}', it already exists`;
        }
      }else {
        throw `Can't add non-existing vertex ->'${node}'`;
      }
    } else {
      throw `You should add '${vertex}' first`;
    }
  }

  print() {
    console.log(this.AdjList);
    for (let [key, value] of this.AdjList) {
      console.log(key, value);
    }
  }

  createVisitedObject(){
    let arr = {};
    for(let key of this.AdjList.keys()){
      arr[key] = false;
    }

    return arr;
  }

  bfs(startingNode){
    console.log('\nBFS')
    let visited = this.createVisitedObject();
    let q = [];

    visited[startingNode] = true;
    q.push(startingNode);

    while(q.length){
      let current = q.pop()
      console.log(current);

      let arr = this.AdjList.get(current);

      for(let elem of arr){
        if(!visited[elem]){
          visited[elem] = true;
          q.unshift(elem)
          console.log(q);
        }
      }
      
    }
  }

  dfs(startingNode){
    console.log('\nDFS')
    let visited = this.createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited){
    visited[startingNode] = true;
    console.log(startingNode);

    let arr = this.AdjList.get(startingNode);

    for(let elem of arr){
      if(!visited[elem]){
        this.dfsHelper(elem, visited);
        console.log(arr);
      }
    }
  }

  doesPathExist(firstNode, secondNode){
    // we will approach this BFS way
    let path = [];
    let visited = this.createVisitedObject();
    let q = [];
    visited[firstNode] = true;
    q.push(firstNode);
    while(q.length){
      let node = q.pop();
      path.push(node);
      let elements = this.AdjList.get(node);
      if(elements.includes(secondNode)){
        console.log(path.join('->'))
        return true;
      }else{
        for(let elem of elements){
          if(!visited[elem]){
            visited[elem] = true;
            q.unshift(elem);
          }
        }
      }
    }
    return false;
  }
}




let g = new Graph();
g.addNode("S");
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");

g.addEdge("S", "A");
g.addEdge("S", "B");
g.addEdge("S", "C");
g.addEdge("D", "C");
g.addEdge("B", "D");
g.addEdge("A", "D");


//console.log(g.dfs("S"));
//console.log(g.bfs("S"));
//g.print();