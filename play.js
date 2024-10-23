const person = {
    name: "Amitava",
    age: 72,
    greet() { 
      console.log('Hi, I am ' + this.name + '.')
    }
};

person.greet();
