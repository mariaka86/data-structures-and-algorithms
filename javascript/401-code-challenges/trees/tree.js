class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;

class BinaryTree {
  constructor(){
    this.root = null;
  }
  preOrder(){
    const traverse= (node)=>{
      // do the thing
      console.log(node.value);
      if (node.left){
        traverse(node.left);

      }
      if(node.right){
        traverse(node.right);
      }
    inOrder(){
      const traverse =(node) =>{
        if (node.left) traverse(node.left);
        // do the thing
        console.log(node.value);
        if (node.right) traverse(node.right);
      }
      traverse(this.root)

    };
    findMax() {
      return this.doFindMax(this.root);
    }
   

  }
  postOrder(){
    const traverse = (node) =>{
      if (node.left) traverse (node.left);
      if (node.right) traverse (node.right);
      //do the thing
      console.log(node.value);
    }
    traverse(this.root);
    };
  }
}

let tree= new BinaryTree();
tree.root = new Node(10);
tree.root = new Node(5);
tree.root = new Node(15);


