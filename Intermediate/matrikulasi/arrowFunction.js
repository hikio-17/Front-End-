// /**
//  * 1. Regular function dapat berupa function declaration ataupun function expression namun arrow function hanya berupa function expression saja. (arrow function expressions)
//  */

// // Regular function
// // 1.function declaration
// function sayHello(name) {
//     console.log(`hello, ${name}`)
// }

// // 2. function expressions
// const sayHello = function(name) {
//     console.log(`helo, ${name}`)
// }

// /** 
//  *  Arrow function
//  * karena merupakan sebuah expressions maka ia hanya dapat digunakan untuk disimpan pada sebuah variabel, sebagai argumen pada sebuah function dan sebagai nilai pada properti objek
//  */

// // 1. sebagai nilai pada variabel
// const numbers = () => Math.random();

// // 2. sebagai argumen pada sebuah fungsi
// ['Fajri', 'Muhammad', 'Tio'].forEach((ele) => console.log(ele));

// // 3 sebagai nilai pada properti objek
// const user = {
//     introduce: () => console.log('Hello nama saya Fajri MUhammad Tio'),
// };

const users = {
    firstName: 'Fajri',
    lastName: 'Tio'
};

users.introduce = function() {
    setTimeout(() => {
        console.log(`Nama saya ${this.firstName} ${this.lastName}`)
    })
}

users.introduce();