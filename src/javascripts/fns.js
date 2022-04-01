function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function cloneArray(arr) {
    return [...arr]
}

function calculateSquare(number) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (typeof number != 'number') rej('Argument must be a number')
            res(number * number)
        }, 1000)
    })
}

function calculateSquareCallback(number, cb) {
    setTimeout(() => {
        if (typeof number != 'number') {
            cb('Argument must be a number')
            return
        }
        cb(null, number * number)
    }, 1000)
}

function squareForErrorTesting(num) {

    if (typeof num !== 'number') throw ('number argument expected')
    return num * num
}

module.exports = {
    sum,
    sub,
    cloneArray,
    calculateSquare,
    calculateSquareCallback,
    squareForErrorTesting
}