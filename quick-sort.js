const array = [1,2,4345,65,45,6,32,543,66,55,3,9,56,4385,965,0,22,33,653];
let count = 0;

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (arr[i] < pivot) {
      less.push(arr[i])
    } else {
      greater.push(arr[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array));
console.log(`Count = ${count}`);