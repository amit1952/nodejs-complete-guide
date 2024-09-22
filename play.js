const name = 'Amitava';
let age = 52;
const hasHobbies = true;

const summariseUser(userName, userAge, userhasHobby) {
    return(
       'Name is ' +
       userName +
       ', age is ' +
       userAge +
       ' and the user has hobbies' 
    );
}

const add=(a,b) => {
    return a + b;
}
console.log(summariseUser(name, age, hasHobbies))
console.log(add(2, 4));