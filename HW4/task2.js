//1
let minAge = 18;
let maxAge = 60;
let age = 61;

switch (true) {
      case age < minAge: {
        console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`);
        break;
      }
      case age < maxAge: {
        console.log('Welcome!');
        break;
      }
      case age > maxAge: {
        console.log('Keep calm and look Culture channel');
        break;
      }
      default: {
        console.log('Technical work');
      }
    }
//2
    [17, 18, 61, '2', 'aaa'].forEach(age => {
        if(typeof(age) == 'number') {
            if(age < minAge) {
                console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`)
            } else if(age < maxAge) {
                console.log('Welcome!')
            } else if(age > maxAge) {
                console.log('Keep calm and look Culture channel')
            } else {
                console.log('Technical work')
            }
        } else {
            console.log('Error! Enter a number!')
        }
    })

//3
let arrAge = [17, 18, 61, '2', 'aaa']

arrAge.forEach(age => {
    if(!isNaN(age)) {
        if(age < minAge) {
            console.log(`You don't have access cause your age is ${age}. It's less then ${minAge}`)
        } else if(age < maxAge) {
            console.log('Welcome!')
        } else if(age > maxAge) {
            console.log('Keep calm and look Culture channel')
        } else {
            console.log('Technical work')
        }
    } else {
        console.log('Error! Enter a number!')
    }
})
