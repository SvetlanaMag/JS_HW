/* 
1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
  чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
  Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.
*/

let str = 'I am the best AQA ever!'

function lettersCount(string) {

    const arr = string.toLowerCase().split('');
    const result = [];

    for(const char of arr) {
      if (char.match(/[a-z]/g)){
        let count = arr.filter(el => el === char).length;
        result.push(count);
      } else {
        result.push(char);
      }
    }
    return result.join('');
}

console.log(lettersCount(str));


/* 
 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
  Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

const sumOfPrices = prices.reduce((sum, el) => sum + el, 0);
const avgPrice = prices.reduce((sum, el) => sum + el, 0)/prices.length;

console.log(`Итого: ${sumOfPrices} $, средняя цена товара ${avgPrice} $`);


/*
 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возврастанию количества гласных букв в слове.
*/
const arr = ['string', 'number', 'undefind', 'symbol', 'array', 'object', 'null'];

function countVowels(word) {
  return word.split('').filter(char => 'aeiouy'.includes(char)).length;;
}

function sortWords(arrayOfWords) {
  return arrayOfWords.sort((a, b) => countVowels(a) - countVowels(b));
}

console.log(sortWords(arr));


/*
 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
  Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
  Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
  Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
*/

const brackets = ['(', '(', ')', '(', ')','(', '(', '(', ')', ')', ')', ')'];

function isEqualPairBrackets(arr) {
  const newBrackets = arr.flat(Infinity);
  let leftBracketsCount = 0;
  let rightBracketsCount = 0;

  for (let i = 0; i < newBrackets.length; i++) {
      if (newBrackets[i] === '(') {
          leftBracketsCount++;
      } else if (newBrackets[i] === ')') {
          rightBracketsCount++;
      }
  };

  if (leftBracketsCount === rightBracketsCount) {
      return `${leftBracketsCount} leftBrackets is equal ${rightBracketsCount} rightBrackets`; 
  } else {
      return `${leftBracketsCount} leftBrackets is not equal ${rightBracketsCount} rightBrackets`;
  }
}

console.log(isEqualPairBrackets(brackets));





