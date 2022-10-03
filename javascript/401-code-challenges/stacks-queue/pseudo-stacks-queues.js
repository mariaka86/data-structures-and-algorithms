const { Stack } = require('react-bootstrap');

class PseudoQueue {
  constructor(){
    this.loadStack = new Stack;
    this.unloadStack = new Stack;
    this.back = null;
    this.front = null;
  }
  enqueue(value){
    if (this.unloadStack === null){
      this.loadStack.push(this.unloadStack.pop());
    }
    this.loadStack.push(value);
    this.back = this.loadStack.top;
  }
  dequeue(){
    if (this.stack === null){
      this.unloadStack.push(this.loadStack.pop());
    }
    let result = this.unloadStack.pop();
    this.front = this.unloadStack.top;
    return result;
  }
}
