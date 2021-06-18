// Iterators are like Advanced loops that can be paused

// Generators are functions that can be paused and can return multiple values (yield values), PUT * to tell javascript thats its an generator


// Iterator Example
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             {value: names[nextIndex++], done: false } :
//             {done: true}
//         }
//     }
// }

// const namesArr = ['Jack', 'Jill', 'John'];

// // Initialise iterator and pass names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example
// function* sayNames() {
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// // assign variable to this generator
// const name =sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// A generator which creates IDs
function* createIDs() {
    let index = 1;

    while(true) {
        yield index++;
    }
}

const gen = createIDs();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);