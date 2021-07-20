const array = [1,2,4345,65,45,6,32,543,66,55,3,9,56,4385,965,0,22,33,653];
let count = 0;

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
      count += 1;
    }
    
  }
  return arr;
}

console.log(bubbleSort(array));
console.log(`Count = ${count}`);