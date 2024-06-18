//1
function sumOfDigits(num) {
    const arr = (num + '').split('').map(el => +el)

    if (arr.length > 1) {
        num = arr.reduce((sum, el) => sum + el, 0)
        return sumOfDigits(num)
    } 
    return num
}

console.log(sumOfDigits(1546));