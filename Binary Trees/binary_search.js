// Average: 0(log(N)) Time | O(log(n)) space
// worst: O(n) time | O(n) space 
function findClosestValueInBst(tree, target) {
    // Write your code here.  
    return findClosestValueInBstHelper(tree, target, tree.value);
  }
  
  function findClosestValueInBstHelper(tree, target, closest) {
    
    // First we check if the tree is empty or not 
    // if it is we can return the closest 
    if (tree === null) return closest;
  
    // Here we say IF we take in the absoulte value of the diference of the target and closest and 
    // compare it with the difernece between the target and the value of the tree.
    // IF that is true we can set closest = the value of the tree.
    
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
      return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
      return closest;
    }
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }