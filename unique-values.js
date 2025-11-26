const arr = [23,55,23,12,56,43,23,55];
const uniqueValues  = arr.filter((ele,index,array)=>array.indexOf(ele)==index)
console.log(uniqueValues)

const newArr = new Set(arr)
console.log([...newArr])