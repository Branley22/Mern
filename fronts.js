//Fronts

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Singly-linked list node class
class SLLNode {
  constructor(val){
    // Holds value for this node
    this.value = val;
    // Pointer to next node
    this.next = null;
  }
}

// Singly-linked list class itself
class SLL {
  // starts with no nodes
  constructor(){
    // this.head points to first node
    this.head = null;
  }
  // Add Fronts
  addFront(value){
    var newNode = new SLLNode(value);
    newNode.next = this.head; 
    this.head = newNode; 
    return this.head;
  }

    // Remove Front
  // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
  removeFront(value){
    if(this.head === null){ // if the list is empty nothing will move
      return this.head;
    }
    var removeNode = this.head; // var holds the node we are removing
    this.head = removeNode.next; // moves head of list to the second node
    removeNode.next = null; 
    return this.head;
  }

  //   Front
  // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
  front(){
    if(this.head === null){ // List is empty
      return null;
    } else{ // List is not empty
    return this.head.value;
    }
  }

}
var mySLL = new SLL(); // no arugements passed in (line 17).... will start with empty list
console.log(mySLL.front());
mySLL.addFront(11);
mySLL.addFront(18);
console.log(mySLL.front());
mySLL.removeFront();
console.log(mySLL);
