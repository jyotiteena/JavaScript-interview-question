const arr = [34, 2, 34, 7, 8, 2, 1, 23, 1];
let output = []
// for(var i=0;i<arr.length;i++){
//     if(!output.includes(arr[i])){
//         output.push(arr[i])
//     }
// }



// for (var i = 0; i < arr.length; i++) {
//     if (output.indexOf(arr[i]) === -1) {
//         output.push(arr[i])
//     }
// }

arr.forEach((ele)=>{
    if(output.indexOf(ele)===-1){
        output.push(ele)
    }
})

console.log(output)