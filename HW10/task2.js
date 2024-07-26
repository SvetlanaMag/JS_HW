// 1. Создайте функцию delay, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delay(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello

function delay(callBack, time) {
    return setTimeout(callBack, time)
}

delay(() => console.log('Hi!'), 3000)

/* 
2. Создайте два промиса:
  - promise1 должен резолвать "After 3 seconds" через 3 секунды
  - promise2 должен резолвать "After 5 seconds" через 5 секунд
  Резолвните оба промиса параллельно используя Promise.All и Promise.allSettled двумя способами:
    1. Обработайте результат Promise.All и Promise.allSettled в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
    2. Обработайте результат await Promise.All и Promise.allSettled в асинхронной функции в try..catch блоке.
        Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
        Вывести в консоль результат обоих промисов по очереди
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("After 3 seconds"), 3000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("After 5 seconds"), 5000)
})

Promise.all([promise1, promise2])
    .then((results) => {
        for(const result of results){
            console.log(result);
        }
    })

Promise.allSettled([promise1, promise2])
    .then((results) => {
        for(const result of results){
            console.log(result);
        }
    })

async function resultsOfPromises() {
    try {
        const [promise1Result, promise2Result] = await Promise.all([promise1, promise2])
        console.log(promise1Result);
        console.log(promise2Result);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('That was Promise.all');
    }

    try {
        const [promise1Result, promise2Result] = await Promise.allSettled([promise1, promise2])
        console.log(promise1Result.value);
        console.log(promise2Result.value);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('That was Promise.allSettled');
    }
}

resultsOfPromises()

/* 
3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел.
  Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b.
  Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке.
  Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами,
  и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch
*/

function sumOfDigits(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            return reject(new Error('Invalid type of number'))
        }
        const result = a + b
        resolve(result)
    })
}

sumOfDigits(3, '3')
    .then(result => console.log(`Sum of digits is equal ${result}`))
    .catch(error => console.log(error.message))

sumOfDigits(3, 10)
    .then(result => console.log(`Sum of digits is equal ${result}`))
    .catch(error => console.log(error.message))

async function resultOfPromise() {
    try {
        const result = await sumOfDigits(23, '3')
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}
    
resultOfPromise()

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos".
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

const url = 'https://jsonplaceholder.typicode.com/todos'
fetch(url)
    .then(response => {
        return response.json()
    })
    .then(object => {
        const arrayOfObjects = []
        object.forEach(el => el.userId === 1 ? arrayOfObjects.push(el) : false)
        console.log(arrayOfObjects);
    })
    .catch(error => console.log(error.message))

async function waitFetch() {
    const response = await fetch(url)
    const object = await response.json()
    const arrayOfObjects = []
    try {
        object.forEach(el => el.userId === 1 ? arrayOfObjects.push(el) : false)
        console.log(arrayOfObjects)
    } catch (error) {
        console.log(error.message)
    }
}

waitFetch()


