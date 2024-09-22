const { summariseUser } = require("./summariseUser");

const name = 'Amitava';
let age = 52;
const hasHobbies = true;

(userName, userAge, userhasHobby) {
    return(
       'Name is ' +
       userName +
       ', age is ' +
       userAge +
       ' and the user has hobbies' 
    );
}

console.log(summariseUser(name, age, hasHobbies))