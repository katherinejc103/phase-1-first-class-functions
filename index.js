// part one 
function food() {
    console.log('i am hungry')
}
function receivesAFunction(callback) {
    callback();
}

// Part two 

function returnsANamedFunction() {
    return function namedFunction() {
      console.log('This is a named function')  
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('This is an anonymous function')
}
