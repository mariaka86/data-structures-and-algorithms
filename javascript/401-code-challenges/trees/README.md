# Code Challenge 14 -15

[Binary-Tree](401-code-challenges/trees/Binary-Tree.png)

[Binary-Search](401-code-challenges/trees/Binary-Search-Tree.png)

## Collaboration : Ryan Gallaway

This code challenge is to create a method to find the max value in a binary tree.

## Whiteboard Process
## 14

![Binary-Search-Tree](https://user-images.githubusercontent.com/93843463/194964235-3677ee5a-a693-45fa-a9d3-fe4bb4b5f1dc.png)


![Binary-Tree](https://user-images.githubusercontent.com/93843463/194964246-89ffaeb0-5f65-40e2-ba96-2597808624fc.png)

## 15



![binary-tree2](https://user-images.githubusercontent.com/93843463/194964454-26b45a91-65d3-439c-a9b2-1893257b3f14.png)


## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
O(n) space
O(n) time

## Solution
<!-- Show how to run your code, and examples of it in action -->

  findMax() {
    return this.doFindMax(this.root);
    
  }
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
