const array = [1,2,4345,65,45,6,32,543,66,55,3,9,56,4385,965,0,22,33,653];
let count = 0;

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(selectionSort(array));
console.log(`Count = ${count}`);