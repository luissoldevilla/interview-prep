// Counting Conversions

function countInversions(arr) {
    // console.log(sortAndCount(arr));
    return sortAndCount(arr);
}

function sortAndCount(arr) {
    if (arr.length < 2) {
        return 0;
    }

    // mid is median 
    let mid = Math.floor(arr.length / 2);
    console.log(mid);
    //
    let left = arr.slice(0, mid);
    //
    let right = arr.slice(mid);

    return sortAndCount(left) + sortAndCount(right) + mergeSortAndCount(arr, left, right);
}

function mergeSortAndCount(arr, left, right) {

    let i = 0;
    let leftIndex = 0; 
    let rightIndex = 0; 
    let inversions = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            arr[i] = left[leftIndex];
            leftIndex++;
        } else {
            arr[i] = right[rightIndex];
            rightIndex++;
            inversions += (left.length - leftIndex);
        }

        i++;
    }

    while (leftIndex < left.length) {
        arr[i] = left[leftIndex];
        leftIndex++;
        i++;
    }

    while (rightIndex < right.length) {
        arr[i] = right[rightIndex];
        rightIndex++;
        i++;
    }

    console.log(inversions)
    return inversions;
}

countInversions([2,1,3,1,2]);
