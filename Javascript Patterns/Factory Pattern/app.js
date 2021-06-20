// Also called factory method
// way of creating interface for creating objects, but we can let subclasses to define which classes to instantiate


// Factory methods are often used in application to manage and maintain and manipulate collections of objects that are different but at the same time have many common characteristics

// eg: a member as in some kind of paid membership application where members may have different types but still have same properties or methods

// A member factory that takes member type
// and creates new object based on that type

function MemberFactory() {
    this.createMember = function(name,type) {
        let member;

        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}


const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member){
    member.define();
});