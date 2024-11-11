function findKthPositive(arr, k) {
  let current = 1;
  let missingCount = 0;
  let index = 0;

  while (missingCount < k) {
    if (index < arr.length && arr[index] === current) {
      index++;
    } else {
      missingCount++;
      if (missingCount === k) {
        return current;
      }
    }
    current++;
  }
}

// Example usage
console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // Output: 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // Output: 6
