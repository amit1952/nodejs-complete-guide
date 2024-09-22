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

console.log(summariseUser(name, age, hasHobbies))