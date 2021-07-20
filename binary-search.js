const array = [1,2,4345,65,45,6,32,543,66,55,3,9,56];
const sortedArr = array.sort((a, b) => a - b);
console.log(sortedArr)

/* 
const sortedArr = array.sort((a, b) => a - b);
console.log(sortedArr)
let count = 0;
const binarySearch = (arr, item) => {
  let start = 0;
  let end = arr.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }    
  }
  return position;
}; 
*/

// recursive style
let count = 0;

const binarySearch = (arr, item, start, end) => {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === arr[middle]) {
    return middle;
  }
  if (item < arr[middle]) {
    return binarySearch(arr, item, 0, middle - 1)
  } else {
    return binarySearch(arr, item, middle + 1, end)
  }
}

console.log(binarySearch(sortedArr, 6, 0, array.length));
console.log(`Count = ${count}`);