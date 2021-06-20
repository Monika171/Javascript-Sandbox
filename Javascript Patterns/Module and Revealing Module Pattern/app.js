// Basic structure
// module which is an IFFE: immediately invoked function expression, runs right away


// (function(){
// // Declare private vars and functions

// return {
//     // Declare public var and function    
// }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function(){
//     let text = 'Hello World';

//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }

//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();
// console.log(UICtrl.text);


const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get // basically revealing these methods
    }
})();

ItemCtrl.add({id:1, name: 'John'});
ItemCtrl.add({id:2, name: 'Mark'});
console.log(ItemCtrl.get(2));



