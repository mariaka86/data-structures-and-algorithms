'use strict';
var head ;
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    // insert before
    // arguments: value, new value
    // adds a new node with the given new value immediately before the first node that has the value specified
function insertBefore(value,newValue){

let newNode = new Node(newValue)
if (!value) {
    value = newNode
    return value
}
let current  = value
while (current.next) {
    current = current.next
}
current.next = newNode
return value
};
//insert after
// arguments: value, new value
// adds a new node with the given new value immediately after the first node that has the value specified

function insertAfter(value, newvalue){
if (value===null){
  return;
}
var newNode = new Node(newvalue);
newNode.next =value.next;
value.next = newNode
 };
