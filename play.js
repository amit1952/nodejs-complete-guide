const person = {
    name: "Amitava",
    age: 72,
    greet() { 
      console.log('Hi, I am ' + this.name + '.')
    }
};

// Create an array
const hobbies = ['Sports', 'Cooking', 'Driving', 'Reading']
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies.map(hobby => {
  return 'Hobby: ' + hobby;
}));
console.log(hobbies);  