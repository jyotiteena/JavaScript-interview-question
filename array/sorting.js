const arr = [100, 22, 3, 4, 53, 6];
console.log(arr)
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }
}

console.log(arr)