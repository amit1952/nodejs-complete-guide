const myName = 'Amitava';
let age = 72;
const hasHobbies = true;


const summarizer = (userName, userAge, userHashobby) => {
    return (
        'nameame is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies ' +
        userHashobby
    );
};

const add = (a, b) =>  a + b;

console.log(summarizer(myName, age, hasHobbies));

console.log(add(1, 2));