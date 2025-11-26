let arr = [1, [2, 3], [4, [5, 6]]];
let result = [];

function SingleArray(array) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];

        // check if value is array
        if (Array.isArray(value)) {
            console.log("if value = ", value);
            SingleArray(value); // recursive call
        } else {
            console.log("else value = ", value);
            result.push(value) // manual push
        }
    }
}

SingleArray(arr);

console.log(result);
// [1, 2, 3, 4, 5, 6]


/////////// loop flow //////////////
// else value =  1
// if value =  [ 2, 3 ]
// else value =  2
// else value =  3
// if value =  [ 4, [ 5, 6 ] ]
// else value =  4
// if value =  [ 5, 6 ]
// else value =  5
// else value =  6
// [ 1, 2, 3, 4, 5, 6 ]
