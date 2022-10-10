# Code Challenge 14 -15

[Binary-Tree](401-code-challenges/trees/Binary-Tree.png)

[Binary-Search](401-code-challenges/trees/Binary-Search-Tree.png)

## Collaboration : Ryan Gallaway

This code challenge is to create a method to find the max value in a binary tree.

## Whiteboard Process
<!-- Embedded whiteboard image -->

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
