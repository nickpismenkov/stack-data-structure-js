class StackNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  sizeOf() {
    return this.n;
  }

  push(value) {
    let oldRoot = this.root;
    this.root = new StackNode(value, oldRoot);
    this.n++;
  }

  pop() {
    if (!this.isEmpty()) {
      let oldRoot = this.root;
      this.root = oldRoot.next;
      this.n--;
    }
  }
}

const stack = new Stack();
stack.push('String1');
stack.push('String2');
stack.push('String3');
stack.push('String4');
stack.push('String5');
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack);
