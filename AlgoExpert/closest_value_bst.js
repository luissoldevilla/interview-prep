// Find the Closest Value in BST


// Tree =  10
//        /  \
//      5     5
//     / \   / \
//    2   5 13 22
//   /       \
//  1         14
// 
//  Target = 12

// Sample Output = 13

// Avg: O(log(N)) Time | O(log(n)) Space
// Worst: O(n) Time | O(n) Space

function findClosestValueInBst(tree, target) {
    // console.log(findClosestValueInBstHelper(tree, target, tree.value))
    findClosestValueInBstHelper(tree, target, tree.value)

}

function findClosestValueInBstHelper(tree, target, closest) {
    // console.log(tree.target)
    // console.log(closest)
    // First we check if the tree is empty or not
    // If it is we can return the closest
    if (tree === null) return closest

    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
        console.log(closest)
    }
    if (target < tree.value) { 
        console.log(findClosestValueInBstHelper(tree.left, target, closest))
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        console.log(closest)
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
    "target": 22
  })

//   findClosestValueInBst(
//     {
//         "tree": {
//           "nodes": [
//             {"id": "10", "left": "5", "right": "15", "value": 10},
//             {"id": "15", "left": "13", "right": "22", "value": 15},
//             {"id": "22", "left": null, "right": null, "value": 22},
//             {"id": "13", "left": null, "right": "14", "value": 13},
//             {"id": "14", "left": null, "right": null, "value": 14},
//             {"id": "5", "left": "2", "right": "5-2", "value": 5},
//             {"id": "5-2", "left": null, "right": null, "value": 5},
//             {"id": "2", "left": "1", "right": null, "value": 2},
//           ],
//           "root": "10"
//         },
//         "target": 12
//       }
//   )
  