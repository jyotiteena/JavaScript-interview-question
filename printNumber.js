function Loop(num) {
    if (num > 100) {
        return;
    }
    console.log(num)
    Loop(num + 1);

}

Loop(1)

