// part one 
function food() {
    console.log('i am hungry')
}
function receivesAFunction(callback) {
    callback();
}

// Part two 
fn = callback;
function returnsANamedFunction() {
    return receivesAFunction();
}
