// each object in javascipt has a prototype
// prototype is an object itself
// all objects inherit their properties and methods from their prototype

// When dealing with object literals then we are inheriting from a prototype called
// 'Object.prototype'

//  When dealing with objects created through a constructor the we are dealing with (ex: Person constructor), it will come from
// 'Person.prototype'

// There is something called prototype chain, where we will have this Person.prototype which goes upto Object.prototype


// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // something to put into prototype and not directly as an object. As calculate age function logic remains same for all.
    // Not flooding them inside constructor
    // this.calculateAge = function() {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate Age prototype
Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get fullname prototype method
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Manipulate Data
// Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));


console.log(mary.hasOwnProperty('getFullName'));
// false, as its in the prototype and not in part of its OWN property
















