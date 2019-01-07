// Object
const person = {
  name: "Max",
  age: 28,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(hobbies.map(hobby => "Hobby: " + hobby));
// console.log(hobbies);
// hobbies.push('Programming');
// console.log(hobbies);
const copiedArray = [...hobbies];
// Spread operator [...] puls out the elements of a nested array
// and puts them in the top level array.
console.log(copiedArray);

// the rest operator [...] followed by argument in a function alows any number
// of arguments when caling the funstion.
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
