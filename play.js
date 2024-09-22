var name = 'Amitava';
var age = 52;
var hasHobbies = true;

function summariseUser(userName, userAge, userhasHobby) {
    return(
       'Name is ' +
       userName +
       ', age is ' +
       userAge +
       ' and the user has hobbies' 
    );
}

console.log(summariseUser(name, age, hasHobbies))