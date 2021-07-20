const array = [1,2,4345,65,45,6,32,543,66,55,3,9,56];
let count = 0;
const linearSearch = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] === item) return i;    
  }
  return null;
};

console.log(linearSearch(array, 45));
console.log(`Count = ${count}`);