function outerFn() {
    console.log("call function")
}

function MainFunction(fn,time) {
    setTimeout(() => {
        fn()
    }, time)
}

MainFunction(outerFn,1000)
MainFunction(outerFn,1000)
MainFunction(outerFn,1000)