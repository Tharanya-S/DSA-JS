//Linked List ==> A data structure that contains a head , tail and length property
// It consist of nodes and each node has a value and pointer to another node or null

//piece of data = val
//reference to next node = next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      //initaily when the head is null
      this.head = newNode; //so both head and tail are pointing to new node
      this.tail = this.head;
    } else {
      // console.log('tail1',this.tail)
      this.tail.next = newNode; //it is assigning the next property to newNode
      this.tail = newNode; //noe set the tail val to last value addded
      // console.log('tail2',this.tail)
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("World");
list.push("JavaScript");
console.log(list);
// var llist = new Node("Hello")
// llist.next = new Node("World")
// llist.next.next = new Node("JavaScript")

console.log("Hello World!!!");
