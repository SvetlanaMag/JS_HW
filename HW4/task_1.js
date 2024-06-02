let minAge = 18;
let maxAge = 60;
//1 вариант
let age = 61;

if(age < minAge) {
    console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`)
} else if(age < maxAge) {
    console.log('Welcome!')
} else if(age > maxAge) {
    console.log('Keep calm and look Culture channel')
} else {
    console.log('Technical work')
}

//2 вариант
[10, 17, 18, 19, 59, 60, 61].forEach(age => {
    if(age < minAge) {
        console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`)
    } else if(age < maxAge) {
        console.log('Welcome!')
    } else if(age > maxAge) {
        console.log('Keep calm and look Culture channel')
    } else {
        console.log('Technical work')
    }
})

