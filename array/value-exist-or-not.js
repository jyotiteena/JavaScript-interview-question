const arr = [23, 1, 2, 7, 6, 89]
const search = 223;
let find = false;
for(var i=0;i<arr.length;i++){
    if(arr[i]===search){
        find = true;
        break;
    }
}

if(find){
    console.log("found this")
}else{
    console.log("not found")
}