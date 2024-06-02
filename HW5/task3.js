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
    str = str.toLowerCase()
    let encodeStr = ''
    let alf = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {    
            encodeStr += ' '
        }
        if(offset === 1) {
            if (str[i] === 'z') {     
                encodeStr += 'a'
            }
            for (j = 0; j < alf.length; j++) {
                if (str[i] == alf[j] && str[i] !== 'z') {    
                    encodeStr += alf[j + 1] 
                } 
            }
        }
        if(offset === -1) {
            if (str[i] === 'a') {     
                encodeStr += 'z'
            }
            for (j = 0; j < alf.length; j++) {
                if (str[i] == alf[j] && str[i] !== 'a') {    
                    encodeStr += alf[j - 1] 
                } 
            }
        }
    }
    return encodeStr
}
let str = 'You are the best qa ever';

console.log(encodeCaesarСode(str, -1))