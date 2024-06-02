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
let str1 = 'you are the best qa ever'
let code = ''
let alf = 'abcdefghijklmnopqrstuvwxyz'
for (let i = 0; i < str1.length; i++) {
    if (str1[i] === ' ') {    
        code += ' '
    }
    if (str1[i] === 'z') {     
        code += '*'
    }
    for (j = 0; j < alf.length; j++) {
        if (str1[i] == alf[j] && str1[i] !== 'z') {    
            code += alf[j + 1] 
        } 
    }
}
console.log(code)