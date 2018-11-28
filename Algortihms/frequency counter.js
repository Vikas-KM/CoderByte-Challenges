// arr1[1,2,3] = arr2[1,4,9]  // true

// but time complexity is O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i of arr1) {
    // console.log(i);
    correctIndex = arr2.indexOf(i ** 2); // /** is squared */
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 4], [1, 4, 9, 16]));
