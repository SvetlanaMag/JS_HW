/* 5*. Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число)
  и возвращает пропущенное число. Массив не отсортирован и может содержать дубликаты.
  Решите эту задачу, используя эффективные методы массива.
*/

const arr = [0, 1, 3, 2, 4, 10, 4, 6, 7, 8, 9, 2, 3, 7, 5, 12];

function findMissingNumber(arr) {
    const newArr = [...new Set(arr)].sort((a,b) => a - b);
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i+1] - newArr[i] !== 1) {
            return newArr[i+1] - 1
        }
    }
}

console.log(findMissingNumber(arr));


// 6**. В файле вы найдете массив карточек юзеров. Задача - создать функцию, которая уберет из массива дубликаты.
//   Вернуть массив с сугубо уникальными карточками. Реализовать методом SET.
//   Разобраться, как считать данные из файла КОДОМ, а не копировать ручками.

const card = require('../../JS_HW/HW7/cards.json');

function removeDuplicate(arr) {
    return [...new Set(arr.map(card => JSON.stringify(card)))].map(card => JSON.parse(card))
}

console.log(removeDuplicate(card));

