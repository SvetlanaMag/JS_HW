//1
let bytes = 145145584;
let i = 0;

while(bytes >= 1024) {
    bytes /= 1024
    i += 1
}

switch (i) {
    case  0: {
        console.log(`${bytes} byte`)
        break;
    } case 1: {
        console.log(`${bytes.toFixed(1)} Kb`)
        break;
    } case 2: {
        console.log(`${bytes.toFixed(1)} Mb`)
        break;
    } case 3: {
        console.log(`${bytes.toFixed(1)} Gb`)
        break;
    } case 4: {
        console.log(`${bytes.toFixed(1)} Tb`)
        break;
    } default: {
        console.log('error')
    }
}

//2
//треугольник
let n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    str += ' '.repeat(n - i)
    for (let j = 1; j <= 2 * i - 1; j++) {
        str += '*'
    }
    str += '\n'
}
console.log(str)

//ромб
let n1 = 5;
let str1 = '';
for (let i = 1; i <= n1; i++) {
    str1 += ' '.repeat(n1 - i)
    for (let j = 1; j <= 2 * i - 1; j++) {
        str1 += '*'
    }
    str1 += '\n'
}

for (let i = n1-1; i >= 1; i--) {
    str1 += ' '.repeat(n1 - i)
    for (let j = 1; j <= 2 * i - 1; j++) {
        str1 += '*'
    }
    str1 += '\n'
}
console.log(str1)

//3
for(let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log(`число ${i} - делится на 3`);
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(`число ${i} - делится на 5`);
    } else if (i % 5 === 0 && i % 3 === 0) {
        console.log(`число ${i} - делится без остатка на 3 и на 5`);
    } 
}

//4
let str2 = 'I am super engineer';
let newStr = '';

for (let i = 0; i < str2.length; i++) {
    if (i === 0) {
        newStr += str2[i].toLowerCase()
    } else if (str2[i] === ' ') {
        newStr += str2[i+1].toUpperCase()
        i++
    } else {
        newStr += str2[i]
    }
}

console.log(newStr);