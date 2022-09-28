// kth from end
// argument: a number, k, as a parameter.
// Return the node’s value that is k places from the tail of the linked list.
// You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

/* Linked List node */

class Node {

  constructor(k)
  {
    this.data = k;
    this.next = null;
  }
}

/* Function to get the kth node from the last of a
 linked list */
class LinkedList
{

  constructor(k){
    this.head = k;
  }

  printKthFromEnd(k)
  {
    let length = 0;
    let temp = this.head;

    // 1) count the number of nodes in Linked List
    while (temp != null) {
      temp = temp.next;
      length++;
    }

    // check if value of n is not more than length of
    // the linked list
    if (length < k)
      return;

    temp = this.head;

    // 2) get the (len-n+1)th node from the beginning
    for (let i = 1; i < length - k + 1; i++)
      temp = temp.next;

    console.log(temp.data);
  }

  /* Inserts a new Node at front of the list. */
  push(new_data)
  {
  /* 1 & 2: Allocate the Node &
    Put in the data*/
    let new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = this.head;

    /* 4. Move the head to point to new Node */
    this.head = new_node;
  }
}

/*Driver program to test above methods */
let list = new LinkedList();
list.push();
list.push();
list.push();
list.push();

list.printKthFromEnd();
