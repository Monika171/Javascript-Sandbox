 // Another way to create object
//  using Object.create

// We can create prototypes inside parent objects amd then have different properties with different prototype methods or different prototype functions

// Object with different prototype method
const personPrototype = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

// this object will take prototypes
const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('Thompson');

console.log(mary);
console.log(mary.greeting());

const brad = Object.create(personPrototype, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Traversy'},
    age: {value: 36}
});

console.log(brad);
console.log(brad.greeting());