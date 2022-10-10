'use strict';
class Node {
  constructor(value){
    this.value = value;
    this.next = null;


class LinkedList{
  constructor(){
    this.head = null;
  }
  // add a node to the END of the linked list
  add(value){
    // creating a new node
    const node = new Node(value);

    //assign node to the head if no head assign the new node to the head property
    if (!this.head){
      this.head = node;
      return;
    }
    // transversing the linked list and adding our new node to the end
    let current = this.head;
    // choosing current.next, while null will reassign the new node
    while(current.next){
      current = current.next
    }
    // next is now null, we reassign the new node
    current.next = node

  }

  // always transverse from the head
  traverse(){
    let current = this.head;
    while (current){
    // when transversing you'll have to console.log/"do the thing"
      console.log(current.value)
      current = current.next
    }
  }

}
let list = new LinkedList
();
console.log('empty list',list);

// adding head to list
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);



console.log ('populated list', list);
list.traverse();

