// destructuing array
const favorites = ['salad', 'juice', 'chicken'];
const [ firstFood, secondFood, thirdFood ] = favorites;
console.log(firstFood);

// destructuing  assigment
let food = 'chicken';
[food] = favorites;
console.log(food);

// default values
const [,,, lastFood = 'manggo'] = favorites;
console.log(lastFood);