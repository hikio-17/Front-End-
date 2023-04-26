const user = {
    firstName: 'Hikma',
    lastName: 'Nelda',
    age: 22
};

// destructuring
// const { firstName, lastName, age } = user;

// console.log(`${firstName} ${lastName}, usia ${age}`);

// ====> Destructuring Assigment <=====
// let firstName = 'fajri';
// let lastName = 'Tio';

// ({ firstName, lastName } = user);

// console.log(firstName, lastName)


// Assigment to different local variable
const { firstName: username } = user;
console.log(username);
