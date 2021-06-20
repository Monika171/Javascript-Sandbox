// Singleton Pattern is the manifestation of Module Pattern

// singleton object is an  immediate anonymous function and can only return one instance of an object at a time


const Singleton = (function(){
    let instance;

    function createInstance() {
        // const object = new Object('Object instance!!!');
        const object = new Object({name: 'Brad'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // true, therefore we can never have more than one instance;