// Prototypal Inheritance
// One object Type inherit form another

// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting, prototype method
Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

 console.log(person1.greeting());

// Customer constructor
function Customer (firstName, lastName, phone, membership) {
     //call is a function that allows us to call another function from somewhere else in the current context

     // 'this' and whatever properties we are inheriting

     Person.call(this, firstName, lastName);

     this.phone = phone;
     this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//since in log its still returning that as a Person prototype
// Now, Make customer.prototype return Customer()

Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);

// Customer greeting, override
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}


console.log(customer1.greeting()); //THIS doesnt work without Object.create in Customer constructor, since Customer is NOT inheriting a prototype

