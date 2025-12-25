const arr = [23, 2, 7, 34, 1, 56, 4];
let even = 0;
let odd = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}

console.log(`even count = ${even}`)
console.log(`odd count = ${odd}`)