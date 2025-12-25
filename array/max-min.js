const arr = [23, 2, 10, 5, 90,22,1]
let min = arr[0];
let max = arr[0];

for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i]
    }
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(`max value = ${max}`)
console.log(`min value = ${min}`)