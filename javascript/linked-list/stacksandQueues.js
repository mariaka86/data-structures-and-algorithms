class Node {

  constructor(value)
  {
    this.value= value;
    this.next = null;
  }
}


class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }


  pop(){
    // remove node from the list
    // return value
    // what happens to top, what if stack is stack is empty (it becomes null)
    let temp = this.top;
    this.top = this.top.next;
    if (this.top == null){
      return undefined;
    }else{
      temp=null;

  }

  peek(){
    // return value of node initiated at the top
  }

  isEmpty(){
    if (this.top === null){
      return true;
    }
  }



}


class Queue{

  enqueue(){
  // add a new node to the back of the queue

  }


  dequeue(){

  }
  peek(){
  // return value of node initiated at the top
  }

  isEmpty(){
    //boolean, is stack empty
  }


}
