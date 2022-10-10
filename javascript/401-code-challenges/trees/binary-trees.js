class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;

class BinaryTree {
  constructor(){
    this.root = null;



doFindMax(node) {
  if (!node) {
    return;
  }
  let value = node.value;
  let leftValue = this.doFindMax(node.left);
  let rightValue = this.doFindMax(node.right);

  if (leftValue > value) {
    value = leftValue;
  }
  if (rightValue > value) {
    value = rightValue;
  }
  return value;
}
}
}
