// The unique thing about symbols is, each symbol is unique
// And this makes them valuable in terms of things like object property identifiers


const sym1 = Symbol();

const sym2 = Symbol('sym2');

// console.log(typeof sym2);
// doesnt return any object or anything like that but just says its a primitive value

// No two symbols can be same
// console.log(Symbol() === Symbol()); //false
// even if with same identifier
// console.log(Symbol('123') === Symbol('123')); //false

// Wrap it in 'String' function to convert into string

// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2'); //id of sym2

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
// like this we are using actual symbol as a property 
// and not myObj.KEY1 , coz its just looking at this like a normal property
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

// not a symbol, just a simple property
// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in loops

// for(let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }

// Symbols are ignored when using json.stringify which takes javascript object literal and turns it into a json string

// console.log(JSON.stringify({key: 'prop'}));

// Now using symbol as a key

// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
// gives empty object















