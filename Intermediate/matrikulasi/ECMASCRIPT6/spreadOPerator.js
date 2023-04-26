/**
 * 1. spread operator dituliskan dengan three consecutive dots (...) ini digunakan untuk membentangkan nilai array atau iterable object menjadi beberap elements
 * 
 */

/** Meleburkan nilai array */
const fruits = ['graple', 'mango', 'apple'];
const numbers = [1, 2, 3, 4, 5];

console.log(fruits);
console.log(Math.max(...numbers));
// dibelakang layar
console.log(fruits[0], fruits[1], fruits[2]);

/** Menggabungkan dua array */
const newArray = [...fruits, ...numbers];
console.log(newArray);
