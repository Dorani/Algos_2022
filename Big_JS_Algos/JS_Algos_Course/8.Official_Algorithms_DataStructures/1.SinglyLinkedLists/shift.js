class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop(val) {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(value) {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
}

//Create LinkedList
const list = new SinglyLinkedList();
//Add to list
list.push("Hello");
list.push("You");
list.push("We made 3 nodes in a linked list!");

//Remove Last
list.pop();
list;
list.pop();
list;
list.pop();
list;

//Add to list
list.push(99);
list.push(100);
list.push(101);

//Remove first
list.shift();
list;
list.shift();
list;
list.shift();
list;
