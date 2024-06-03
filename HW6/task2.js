//1
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai'];

function findExclusive(arrayPizzas) {
    const arrayExclusive = []
    for (let pizza of arrayPizzas) {
        if(!competitorPizzas.includes(pizza)){
            arrayExclusive.push(pizza)
        }
    } 
    return arrayExclusive.length ? arrayExclusive : null;
}

const array = ['Peperoni', 'Barbeque', 'Diablo', '4 seasons', 'Hawai'];
console.log(findExclusive(array));

const array1 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'Hawai'];
console.log(findExclusive(array1));

//2
function findWord(str) {
    const arr = str.split(' ').sort((a, b) => b.length - a.length);
    const arrWord = []
    let i = 0;
    while(arr[i].length === arr[i+1].length) {
        arrWord.push(arr[i])
        arrWord.push(arr[i+1])
        i++
    }
    return arrWord
}

let str = 'You Are the Best qa ever'
console.log(findWord(str));

//3 - 1 вариант
function findDuplicate(arr) {
    const set = new Set(arr)
    return Array.from(set)
}

console.log(findDuplicate([1, 2, 8, 5, 5, 6, 6, 8]));

//3 - 2 вариант
function findDuplicate2(arr) {
    
    return  arr.filter((el, i, arr) => arr.indexOf(el) === i)
}

console.log(findDuplicate2([1, 2, 8, 5, 5, 6, 6, 8]));

//4
function isPalindrom(word) {
    const arr = word.toLowerCase().split('');
    return arr.join() === arr.reverse().join()
}

console.log(isPalindrom('Abba'));
