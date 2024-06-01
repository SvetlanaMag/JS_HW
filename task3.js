let minAge = 18;
let maxAge = 60;

const ageEnter = prompt('Please enter your age');

if(!isNaN(ageEnter)) {
    switch (true) {
        case ageEnter < minAge: {
            alert(`You don't have access cause your age is ${ageEnter}. It's less then ${minAge}`);
            break;
        }
        case ageEnter < maxAge: {
            alert('Welcome!');
            break;
        }
        case ageEnter > maxAge: {
            alert('Keep calm and look Culture channel');
            break;
        }
        default: {
            alert('Technical work');
        }
    } 
} else {
    alert('Error! Enter a number!')
}
