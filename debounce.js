function MainFunction(inner, time) {
    let timer;
    return () => {
        clearInterval(timer)
        timer = setTimeout(() => {
            inner()
        }, time)
    }
}
function outerFn() {
    console.log("call function")
}

const output = MainFunction(outerFn, 1000)
output()
output()
output()
output()
output()
output()