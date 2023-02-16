// Find the Closest Value in BST


// Tree =  10
//        /  \
//      5     5
//     / \   / \

// Avg: O(log(N)) Time | O(log(n)) Space
// Worst: O(n) Time | O(n) Space

function findClosestValueInBst(tree, target) {
    findClosestValueInBstHelper(tree, target, tree.value)

}

function findClosestValueInBstHelper(tree, target, closest) {
    console.log(tree)
    // First we check if the tree is empty or not
    // If it is we can return the closest
    if (tree === null) return closest

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) { 
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > target.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest
    }
}

findClosestValueInBst(
    {
    "tree": {
      "nodes": [
        {"id": "10", "left": "5", "right": "15", "value": 10},
        {"id": "15", "left": "13", "right": "22", "value": 15},
        {"id": "22", "left": null, "right": null, "value": 22},
        {"id": "13", "left": null, "right": "14", "value": 13},
        {"id": "14", "left": null, "right": null, "value": 14},
        {"id": "5", "left": "2", "right": "5-2", "value": 5},
        {"id": "5-2", "left": null, "right": null, "value": 5},
        {"id": "2", "left": "1", "right": null, "value": 2},
        {"id": "1", "left": null, "right": null, "value": 1}
      ],
      "root": "10"
    },
    "target": 12
  });
  