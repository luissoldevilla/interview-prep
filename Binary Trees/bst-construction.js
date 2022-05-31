// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  //Average: O(log(n)) Time | O(1) Space
  // Worst: O(n) Time | O(1) Space
  insert(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let currentNode = this;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = new BST(value);
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = new BST(value);
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return this;
  }

  //Average: O(log(n)) Time | O(1) Space
  // Worst: O(n) Time | O(1) Space
  contains(value) {
    // Write your code here.
    let currentNode = this;
    while (currentNode !=== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
