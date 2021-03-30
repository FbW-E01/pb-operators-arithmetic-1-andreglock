const snackServings = 22;
const guests = 15;

console.log(snackServings, guests);

console.log('1:', snackServings + guests);

console.log('2:', snackServings - guests, guests - snackServings);

console.log('3:', snackServings * guests);

console.log('4:', snackServings / guests);

const drinks = 10;

const resultOne = (snackServings * guests) / drinks;

console.log('5:', resultOne);

let monkeys = 15;
let bananas = 9;

console.log('5(again):', monkeys / bananas);

const monkeyFights = 20;

const resultTwo = (monkeys + bananas) * monkeyFights;

console.log('6:', resultTwo);

monkeys++;

console.log('7:', monkeys);

bananas--;

console.log('8:', bananas);

const happiness = bananas - monkeys;

console.log('9:', happiness + monkeyFights);

console.log('10:', resultOne % resultTwo);