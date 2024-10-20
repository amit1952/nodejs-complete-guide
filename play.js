const name = 'Amitava';
let age = 72;
const hasHobbies = true;


const summarizer = (userName, userAge, userHashobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHashobby
    );
};

console.log(summarizer(name, age, hasHobbies));