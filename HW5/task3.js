//1
let word = 'Engineer';
let vowels = 'aeiou';
let consonants = 'bcdfghjklmnpqrstvwxyz';
let countV = 0;
let countC = 0;

for (let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i].toLowerCase())) {
        countV++
    } else if (consonants.includes(word[i].toLowerCase())) {
        countC++
    }
}
console.log(`word ${word} contains ${countV} vowels and ${countC} consonants`);

//2
function encodeCaesarСode(str, offset) {
    let encodeStr = '';
    let alphLowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let alphUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {    
            encodeStr += ' '
        }
        if(offset === 1) {
            if (str[i] === 'z') {     
                encodeStr += 'a'
            }
            if (str[i] === 'Z') {     
                encodeStr += 'A'
            }
            for (j = 0; j < alphLowerCase.length; j++) {
                if (str[i] == alphLowerCase[j] && str[i] !== 'z') {    
                    encodeStr += alphLowerCase[j + 1] 
                }
                if (str[i] == alphUpperCase[j] && str[i] !== 'Z') {    
                    encodeStr += alphUpperCase[j + 1] 
                } 
            }
        }
        if(offset === -1) {
            if (str[i] === 'a') {     
                encodeStr += 'z'
            }
            if (str[i] === 'A') {     
                encodeStr += 'Z'
            }
            for (j = 0; j < alphLowerCase.length; j++) {
                if (str[i] == alphLowerCase[j] && str[i] !== 'a') {    
                    encodeStr += alphLowerCase[j - 1] 
                } 
                if (str[i] == alphUpperCase[j] && str[i] !== 'A') {    
                    encodeStr += alphUpperCase[j - 1] 
                }
            }
        }
    }
    return encodeStr
}

let str = 'You Are the Best qa ever';

console.log(encodeCaesarСode(str, -1))